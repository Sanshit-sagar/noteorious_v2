import React, { Key, useRef } from 'react'
import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'
import { useSelectState } from 'react-stately'
import type { AriaSelectProps } from '@react-types/select'

import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { Wrapper, Label } from '../Shared'

import { Item } from 'react-stately'

import { TriangleDownIcon } from '@radix-ui/react-icons'

interface ButtonProps {
    isOpen?: boolean;
    isFocusVisible?: boolean;
};

export const StyledButton = styled('div', {
    appearance: 'none',
    width: '210px',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid $border',
    textAlign: 'left',
    padding: '$1',
    borderRadius: '$2',
    fontSize: '14px',
    color: 'black'
})

export const StyledValue = styled('div', {
    display: 'inline-flex',
    alignItems: 'center'
})

export const StyledIcon = styled('div', {
    border: 'thin solid $border',
    borderRadius: '$1',
    color: '$border',
    '&:hover': {
        borderColor: '$border3'
    },
    paddingHorizontal: '$1'
})


const ExtendedTriggerButton = React.forwardRef<
    React.ElementRef<typeof StyledButton>,
    Radix.ComponentPropsWithoutRef<typeof StyledButton> & ButtonProps
>(({ children, isOpen, isFocusVisible, ...props }, forwardedRef) => ( 
    <StyledButton 
        {...props} 
        ref={forwardedRef} 
        css={{
            backgroundColor: isOpen ? "$accent" : "transparent",
            border: '2px solid',
            borderColor: isFocusVisible ? '$funky' : '$border', 
            boxShadow: isFocusVisible ? '0 0 0 3px $funky' : '',
        }}
    >
        {children}
    </StyledButton>  
));

export function Select<T extends object>(props: AriaSelectProps<T>) {
  
    let state = useSelectState(props)
    let ref = useRef(null)
    let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref)
    let { buttonProps } = useButton(triggerProps, ref)
    let { focusProps, isFocusVisible } = useFocusRing()

    return (
        <Wrapper>
            <Label {...labelProps}> {props.label} </Label>
            
            <HiddenSelect
                state={state}
                triggerRef={ref}
                label={props.label}
                name={props.name}
            />
            
            <ExtendedTriggerButton
                {...mergeProps(buttonProps, focusProps)}
                ref={ref}
                isOpen={state.isOpen}
                isFocusVisible={isFocusVisible}
            >
                <StyledValue {...valueProps}>
                    {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
                </StyledValue>
                <StyledIcon>
                    <TriangleDownIcon /> 
                </StyledIcon>
            </ExtendedTriggerButton>

            {state.isOpen && (
                <Popover isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...menuProps} state={state} /> 
                </Popover>
            )}
        </Wrapper> 
    );
}

// type Animal = {
//     id: 'redPanda' | 'cat' | 'dog' | 'aardvark' | 'snake';
//     index: number;
//     value: string; 
// }

export const Picker = () => (
    <Select label={'Animals'}>
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
    </Select>
)