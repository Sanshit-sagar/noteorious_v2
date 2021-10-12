import React, { useRef, useContext, createContext, ReactNode } from 'react'
import * as Radix from '@radix-ui/react-primitive'
import { CSS } from '../../stitches.config'

import { Text } from '../../primitives/Text'
import { useListBox, useOption } from 'react-aria'
import { ListBoxProps, OptionProps, OptionContextValue } from './interfaces'
import { List, ListItem, ListItemIndicator, ItemContent, StyledDescription } from './styles'
import { CheckIcon, DotFilledIcon } from '@radix-ui/react-icons'

export { Section } from 'react-stately'

const OptionContext = createContext<OptionContextValue>({
    labelProps: {},
    descriptionProps: {}
});

interface ListItemProps { 
    isFocused?: boolean; 
    isSelected?: boolean; 
    css?: CSS; 
}

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
            {[...state.collection].map((item) => (
                <Option 
                    key={item.key} 
                    item={item} 
                    state={state} 
                />
            ))}
        </List>
    );
}

function Option({ item, state }: OptionProps) {
    let ref = useRef<HTMLLIElement>(null)

    let {
        optionProps,
        labelProps,
        descriptionProps,
        isSelected,
        isFocused,
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
                    <DotFilledIcon 
                        aria-hidden='true' 
                    />  
                </ListItemIndicator> 
            )}
        </StyledListItem>
    );
}
    
export function Label({ children }: { children: ReactNode }) {
    let { labelProps } = useContext(OptionContext)
    return <div {...labelProps}>{children}</div>;
}

export function Description({ children }: { children: ReactNode }) {
    let { descriptionProps } = useContext(OptionContext)
    return (
        <StyledDescription {...descriptionProps}>
            {children}
        </StyledDescription>
    );
}
