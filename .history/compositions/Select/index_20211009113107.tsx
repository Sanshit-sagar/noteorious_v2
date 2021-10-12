import React, { useRef } from 'react'
import { styled } from '../../stitches.config'


import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'
import { useSelectState } from 'react-stately'

import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { Wrapper, Label } from '../Shared'

import type { AriaSelectProps } from '@react-types/select'
import * as Radix from '@radix-ui/react-primitive'

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
    padding: '6px 2px 6px 8px',
    borderRadius: '$2',
    fontSize: '14px',
    color: 'black'
})


const ExtendedTriggerButton = React.forwardRef<
    React.ElementRef<typeof StyledButton>,
    Radix.ComponentPropsWithoutRef<typeof StyledButton> & ButtonProps
>(({ children, isOpen, isFocusVisible, ...props }, forwardedRef) => ( 
        <StyledButton 
            {...props} 
            ref={forwardedRef} 
            css={{
                backgroundColor: isOpen ? "#eee" : "white",
                border: '2px solid',
                borderColor: isFocusVisible ? 'orange' : 'crimson', 
                boxShadow: isFocusVisible ? '0 0 0 3px rgba(100, 50, 100, 0.2)' : '',
            }}
        /> 
)); 

export const StyledValue = styled('div', {
    display: 'inline-flex',
    alignItems: 'center'
})

export const StyledIcon = styled('div', {
    width: '18px',
    height: '18px',
    padding: '6px 2px',
    margin: '0 4px',
    background: 'seagreen',
    borderRadius: '4px',
    color: 'white'
})

export function Select<T extends object>(props: AriaSelectProps<T>) {
  
    let ref = useRef(null)
    let state = useSelectState(props)

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
                    {state.selectedItem ? state.selectedItem.rendered : "Select an option"}
                </StyledValue>
                <StyledIcon />
            </ExtendedTriggerButton>

            {state.isOpen && 
                <Popover isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...menuProps} state={state} /> 
                </Popover>
            }
        </Wrapper> 
    );
}

  