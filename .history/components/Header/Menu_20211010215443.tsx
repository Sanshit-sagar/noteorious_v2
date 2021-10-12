import React, { useRef } from 'react'  
import * as Radix from '@radix-ui/react-primitive'
import { styled, CSS,  keyframes } from '../../stitches.config'

import type { ComboBoxProps } from '@react-types/combobox'
import { useComboBoxState } from 'react-stately'
import { useComboBox, useFilter, useButton } from 'react-aria'

import { ListBox } from '../../compositions/ListBox'
import { Popover } from '../../compositions/Popover'
import { Item, Section } from 'react-stately'

type TypeMenu = {
    category: 'layout',
    variants: 'heading' | 'plain' | 'code' | 'quote',
    default: 'plain',
};

type AlignmentMenu = {
    category: 'Alignment',
    variants: 'left' | 'right' | 'center' | 'justify',
    default: 'left',
}

type FontMenu = {
    category: 'font',
    variants: 'sans' | 'cursive' | 'monospace' | 'serif' | 'inter',
    default: 'sans',
}

const Container = styled('div', {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
});

const Label = styled('label', {
    display: 'inline-block',
    fontSize: '1',
    fontStyle: 'medium',
    color: '$text',
    alignText: 'left'
})

const ComboBoxLabel = React.forwardRef<
    React.ElementRef<typeof Label>, 
    Radix.ComponentPropsWithoutRef<typeof Label> & { hideLabel?: boolean; } & React.HTMLAttributes<HTMLLabelElement>
>(({ hideLabel, ...props }, forwardedRef) => (
    <Label {...props} ref={forwardedRef} />   
))

const ComboBoxInputGroup = styled('div', {
    display: 'inline-flex', 
    flexDirection: 'row',
    border: '1px solid $border',
    br: '$1',
    outline: 'none',
    overflow: 'hidden',
    boxShadow: '2px 0 0 2px $accent',
});

const ComboBoxButton = styled(Button, {

})


export function ComboBox<T extends object>(props: ComboBoxProps<T>) {
    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({ ...props, defaultFilter: contains });

    let buttonRef = useRef(null)
    let inputRef = useRef(null)
    let listBoxRef = useRef(null)
    let popoverRef = useRef(null)

    let {
        buttonProps: triggerProps,
        inputProps,
        listBoxProps,
        labelProps
    } = useComboBox({...props,inputRef,buttonRef,listBoxRef,popoverRef}, state);

    let { buttonProps } = useButton(triggerProps, buttonRef)

    return (
        <Container>
            <ComboBoxLabel {...labelProps} /> 
            <ComboBoxInputGroup>
                <ComboBoxInput {...inputProps} ref={inputRef} />
                <ComboBoxButton {...buttonProps} ref={buttonRef} />
            </ComboBoxInputGroup>

        </Container>
    )
}