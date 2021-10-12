import React, { useRef, RefObject } from 'react'  
import * as Radix from '@radix-ui/react-primitive'
import { styled, CSS,  keyframes } from '../../stitches.config'

import type { ComboBoxProps } from '@react-types/combobox'
import { useComboBoxState } from 'react-stately'
import { useComboBox, useFilter, useButton } from 'react-aria'

import { ListBox } from '../../compositions/ListBox'
import { Popover } from '../../compositions/Popover'
import { Item, Section } from 'react-stately'

import { ArrowDownIcon } from '@radix-ui/react-icons'

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

const ExtendedLabel = React.forwardRef<
    React.ElementRef<typeof Label>, 
    Radix.ComponentPropsWithoutRef<typeof Label> & { hideLabel?: boolean; } & React.HTMLAttributes<HTMLLabelElement>
>(({ hideLabel, ...props }, forwardedRef) => (
    <Label {...props} ref={forwardedRef} />   
))

const InputGroup = styled('div', {
    display: 'inline-flex', 
    flexDirection: 'row',
    border: '1px solid $border',
    br: '$1',
    outline: 'none',
    overflow: 'hidden',
    boxShadow: '2px 0 0 2px $accent',
});

const PopoverToggler = styled('button', {
    padding: '0 $1',
    backgroundColor: '$transparent',
    border: '2px solid $border',
    cursor: 'default',
    borderRadius: '$2',
    color: '$text',
    fontSize: '$1',
    fontStyle: 'normal',
})

const UserInput = styled('input', {
    padding: '$1 $3',
    outline: 'none', 
    backgroundColor: '$panel',
})

const ExtendedInputGroup = React.forwardRef<
    React.ElementRef<typeof InputGroup>,
    Radix.ComponentPropsWithoutRef<typeof InputGroup> & ExtendedInputGroupProps
>(({ inputProps, buttonProps, inputRef, buttonRef, icon, focused, hovered, ...props }), forwardedRef) => {
    
    <InputGroup>
        <UserInput {...inputProps} ref={inputRef} css={{ }} />
        <Button {...buttonProps} ref={buttonRef} css={{ }}>
            {icon}
        </Button> 
    </InputGroup>
}

export function ComboBox<T extends object>(props: ComboBoxProps<T>) {

    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({ ...props, defaultFilter: contains });
    let {hoverProps, isHovered} = useHover({
        onHoverStart: (e) => console.log(`hovering at ${e}`),
        onHoverEnd: (e) => console.log(`done hovering....`)
    }); 

    let buttonRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    let inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let listBoxRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    let popoverRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    let {
        buttonProps: triggerProps,
        inputProps,
        listBoxProps,
        labelProps
    } = useComboBox({ ...props, inputRef, buttonRef, listBoxRef, popoverRef }, state);

    let { buttonProps } = useButton(triggerProps, buttonRef)

    return (
        <Container>
            <ExtendedLabel {...labelProps} /> 

            <ExtendedInputGroup 
                {...inputProps} 
                {...buttonProps} 
                buttonRef={buttonRef} 
                inputRef={inputRef} 
                focused={state.isFocused}
                hovered={state.}
                icon={<ArrowDownIcon aria-hidden='true' /> } 
            >


            </ExtendedInputGroup> 

            {state.isOpen ? 
                <Popover 
                    popoverRef={popoverRef} 
                    isOpen={state.isOpen} 
                    onClose={state.close}
                >
                    <ListBox
                        {...listBoxProps}
                        listBoxRef={listBoxRef}
                        state={state}
                    />
                </Popover> 
            : null} 
        </Container>
    );
}