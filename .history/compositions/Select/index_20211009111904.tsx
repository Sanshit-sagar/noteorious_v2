import React from 'react'
import { styled } from '../../stitches.config'

import type { AriaSelectProps } from '@react-types/select'
import { useSelectState } from 'react-stately'
import { 
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'
import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { Wrapper, Label } from '../Shared'

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
  
    let state = useSelectState(props)
    let ref = React.useRef(null)

    let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref)
    let { buttonProps } = useButton(triggerProps, ref)
    let { focusProps, isFocusVisible } = useFocusRing()

    return (
        <Wrapper>
            <Label {...labelProps}>{props.label}</Label>
            <HiddenSelect
                state={state}
                triggerRef={ref}
                label={props.label}
                name={props.name}
            />
            <Button
                {...mergeProps(buttonProps, focusProps)}
                ref={ref}
                isOpen={state.isOpen}
                isFocusVisible={isFocusVisible}
            >
                <Value {...valueProps}>
                    {state.selectedItem ? state.selectedItem.rendered : "Select an option"}
                </Value>
                <StyledIcon />
            </Button>
            {state.isOpen && 
                <Popover isOpen={state.isOpen} onClose={state.onClose}>
                    <ListBox {...menuProps} state={state} /> 
                </Popover>
            }
    )
  