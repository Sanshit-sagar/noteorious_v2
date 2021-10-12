import React, { useRef, useContext, createContext, RefObject, ReactNode, HTMLAttributes } from 'react'
import { styled, css } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { useListBox, useOption } from 'react-aria' 
import { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import type { ListState } from 'react-stately'

import { CheckIcon } from '@radix-ui/react-icons'

interface ListBoxProps extends AriaListBoxOptions<unknown> {
    listBoxRef?: RefObject<HTMLUListElement>;
    state: ListState<unknown>;
}
  
interface OptionProps {
    item: Node<unknown>;
    state: ListState<unknown>;
}

interface ListItemProps {
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

export const baseItemCss = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: '$untitled',
    fontSize: '$1',
    fontVariantNumeric: 'tabular-nums',
    lineHeight: '1',
    cursor: 'default',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    height: '$5',
    px: '$5',
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

const ListItemPrimitiveProps = Radix.ComponentProps<typeof HTMLLIElement>;
const ListItemProps = ListItemPrimitiveProps & { css?: CSS };

const StyledListItem = React.forwardRef<
    React.ElementRef<typeof ListItem>,
    Radix.ComponentPropsWithoutRef<typeof ListItem>
>(({ ...children, props }, forwardedRef) => ( 
    <ListItem {...props} ref={forwardedRef}>
        <Flex css={{ width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          >
              
          </Box>
        </Flex>
    </ListItem>
); 

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
