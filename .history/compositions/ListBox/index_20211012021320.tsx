import React, { useRef, useContext, createContext, ReactNode } from 'react'
import { styled } from '../../stitches.config'

import * as Radix from '@radix-ui/react-primitive'
import { CSS } from '../../stitches.config'
import { Text } from '../../primitives/Text'
import { ScrollArea } from '../ScrollArea'

import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'
export { Section } from 'react-stately'
import { useListBox, useOption, useListBoxSection } from 'react-aria'

import { ListBoxProps, OptionProps, OptionContextValue } from './interfaces'
import { List, ListItem, ListItemIndicator, ItemContent, StyledDescription } from './styles'
import { CheckboxIcon, DotFilledIcon } from '@radix-ui/react-icons'


const OptionContext = createContext<OptionContextValue>({
    labelProps: {},
    descriptionProps: {}
});

interface ListItemProps { 
    isFocused?: boolean; 
    isSelected?: boolean; 
    css?: CSS; 
}

interface SectionProps {
    section: Node<unknown>;
    state: ListState<unknown>;
}


export const SectionContainer = styled('ul', {
    height: 5,
    padding: 0,
    margin: 0,
    color: '$hiContrast',
})

export const SectionContent = styled('div', {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column', 
    bc: '$accent',
    color: '$text',
    jc: 'flex-start',
    mt: '$1'
});

const StyledListItem = React.forwardRef<
    React.ElementRef<typeof ListItem>,
    Radix.ComponentPropsWithoutRef<typeof ListItem> & ListItemProps
>(({ children, isSelected, isFocused, ...props }, forwardedRef) => ( 

    <ListItem 
        {...props} 
        ref={forwardedRef} 
        css={{ 
            backgroundColor: isFocused ? '$accent' : 'white', 
            color: isFocused ? '$text' : '$hiContrast',
            outline: isFocused ? 'blue' : 'none' 
        }}
    >
        {children} 
    </ListItem>
)); 


export function ListBox(props: ListBoxProps) {
    let ref = React.useRef<HTMLUListElement>(null)
    let { listBoxRef = ref, state } = props
    let { listBoxProps } = useListBox(props, state, listBoxRef)

    return (
        
            <List {...listBoxProps} ref={listBoxRef}>
                <ScrollArea>
                    {[...state.collection].map((item) => (
                        item.type==='section' ? (
                            <ListBoxSection key={item.key} section={item} state={state} />
                        ) : (
                            <Option key={item.key} item={item} state={state} />
                        )
                    ))}
                </ScrollArea>
            </List>
        
    );
}

const SectionHeading = styled('span', {
    fontSize: '$1',
    textTransform: 'uppercase',
    color: '$text',
    padding: 0,
    margin: 0
});

function ListBoxSection({ section, state }: SectionProps) {
    let { itemProps, headingProps, groupProps } = useListBoxSection({ 
        heading: section.rendered, "aria-label": section["aria-label"]
    });
  
    return (
        <SectionContainer {...itemProps}>
            {section.rendered && (
                <SectionHeading {...headingProps}>
                    <Text> {section.rendered} </Text>
                </SectionHeading>
            )}
            <SectionContent {...groupProps}>
                {[...section.childNodes].map((node) => (
                    <Option key={node.key} item={node} state={state} />
                ))}
            </SectionContent>
        </SectionContainer>
    );
  }
  

function Option({ item, state }: OptionProps) {
    let ref = useRef<HTMLLIElement>(null)

    let {
        optionProps,
        labelProps,
        isSelected,
        isFocused,
        descriptionProps,
    } = useOption({ key: item.key }, state, ref)
    
    return (
        <StyledListItem
            {...optionProps}
            ref={ref}
            isSelected={isSelected}
            isFocused={isFocused}
        >
            <ItemContent>
                <OptionContext.Provider value={{ labelProps, descriptionProps }}>
                   <Text> {item.rendered} </Text>
                </OptionContext.Provider>
            </ItemContent>

            {isSelected && (
                <ListItemIndicator>
                    <CheckboxIcon aria-hidden='true' />  
                </ListItemIndicator> 
            )}
        </StyledListItem>
    );
}
    
export function Label({ children }: { children: ReactNode }) {
    let { labelProps } = useContext(OptionContext)

    return (
        <div {...labelProps}>
            {children}
        </div>
    );
}

export function Description({ children }: { children: ReactNode }) {
    let { descriptionProps } = useContext(OptionContext)

    return (
        <StyledDescription {...descriptionProps}>
            {children}
        </StyledDescription>
    );
}
