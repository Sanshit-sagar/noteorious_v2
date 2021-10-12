import React, {ComponentPropsWithRef,  useRef, useContext, createContext, RefObject, ReactNode, HTMLAttributes } from 'react'
import { styled, css, CSS } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { useListBox, useOption } from 'react-aria' 
import { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'

import { Box } from '../Box'
import { Flex } from '../Flex'

import { CheckIcon } from '@radix-ui/react-icons'

interface ListBoxProps extends AriaListBoxOptions<unknown> {
    listBoxRef?: RefObject<HTMLUListElement>;
    state: ListState<unknown>;
}
  
interface OptionProps {
    item: Node<unknown>;
    state: ListState<unknown>;
}

interface ListItemPrimitiveProps {
    isFocused?: boolean;
    isSelected?: boolean;
}

interface OptionContextValue {
    labelProps: HTMLAttributes<HTMLElement>;
    descriptionProps: HTMLAttributes<HTMLElement>;
}

const List = styled('ul', {
    maxHeight: '300px',
    overflow: 'auto',
    listStyle: 'none',
    margin: '$2 $1',
    outline: 'none',
    padding: 0,
});


const ListItem = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'default',
    outline: 'none',
    padding: '$1',
    fontSize: '2',
})

const InteractiveListItem = ({ isFocused, isSelected, children }: ListItemPrimitiveProps) => {
    <ListItem isFocused={isFocused} isSelected={isSelected}>
        {children}
    </ListItem>
}

const StyledListItem = React.forwardRef<
    React.ElementRef<typeof ListItem>,
    (Radix.ComponentPropsWithoutRef<typeof ListItem> & { css?: CSS })
>(({ children, ...props }, forwardedRef) => ( 
    <ListItem {...props} ref={forwardedRef}>
        <Box as="span" css={{ position: 'absolute', left: '$1' }}>
            <Flex css={{ width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center', borderRadius: '$2', ackgroundColor: '$accent',}}>
                <CheckIcon />  
            </Flex>
        </Box>
        {children} 
    </ListItem>
)); 

const ItemContent = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

const StyledDescription = styled('div', {
    fontWeight: 'normal',
    fontSize: '12px'
})

export function ListBox(props: ListBoxProps) {
    let ref = React.useRef<HTMLUListElement>(null);
    let { listBoxRef = ref, state } = props;
    let { listBoxProps } = useListBox(props, state, listBoxRef);

    return (
        <List {...listBoxProps} ref={listBoxRef}>
            {[...state.collection].map((item) => (
                <Option key={item.key} item={item} state={state} />
            ))}
        </List>
    );
}

const OptionContext = createContext<OptionContextValue>({
    labelProps: {},
    descriptionProps: {}
});

function Option({ item, state }: OptionProps) {
    let ref = useRef<HTMLLIElement>(null)
    let {
        optionProps,
        labelProps,
        descriptionProps,
        isSelected,
        isFocused
    } = useOption({ key: item.key }, state, ref)
    
    return (
        <StyledListItem
            {...optionProps}
            ref={ref}
            isFocused={isFocused}
            isSelected={isSelected}
        >
            <ItemContent>
                <OptionContext.Provider value={{ labelProps, descriptionProps }}>
                    {item.rendered}
                </OptionContext.Provider>
            </ItemContent>
            {isSelected && (
                <CheckIcon aria-hidden="true" style={{ width: 18, height: 18 }} />
            )}
        </StyledListItem>
    );
}
    
export function Label({ children }: { children: ReactNode }) {
    let { labelProps } = useContext(OptionContext);
    return <div {...labelProps}>{children}</div>;
}

export function Description({ children }: { children: ReactNode }) {
    let { descriptionProps } = useContext(OptionContext);
    return (
        <StyledDescription {...descriptionProps}>
            {children}
        </StyledDescription>
    );
}
