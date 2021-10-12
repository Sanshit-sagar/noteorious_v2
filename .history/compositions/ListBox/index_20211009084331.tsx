import React, { useRef, useContext, createContext, ReactNode, HTMLAttributes } from 'react'
import { styled } from '../stitches.config'

import { useListBox, useOption } from 'react-aria' 
import { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'

import { CheckIcon } from '@radix-ui/react-icons'

interface ListBoxProps extends AriaListBoxOptions<unknown> {
    listBoxRef?: React.RefObject<HTMLUListElement>;
    state: ListState<unknown>;
  }
  
interface OptionProps {
    item: Node<unknown>;
    state: ListState<unknown>;
}

  
// const StyledDescription = styled.div`
//     font-weight: normal;
//     font-size: 12px;
// `;


export function ListBox(props: ListBoxProps) {
    let ref = React.useRef<HTMLUListElement>(null);
    let { listBoxRef = ref, state } = props;
    let { listBoxProps } = useListBox(props, state, listBoxRef);
    // let iterableKeys = state.collection.getKeys()[Symbol.iterator]()

    for (const c in state.collection) (
        <Option key={item.key} item={item} state={state} />;
    ); 

    return (
        <List {...listBoxProps} ref={listBoxRef}>
            
        </List>
    );
}

interface OptionContextValue {
    labelProps: HTMLAttributes<HTMLElement>
    descriptionProps: HTMLAttributes<HTMLElement>
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
        <ListItem
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
        </ListItem>
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
