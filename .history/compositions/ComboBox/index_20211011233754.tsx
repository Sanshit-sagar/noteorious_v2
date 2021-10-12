import React, { useRef, RefObject } from 'react'  
import * as Radix from '@radix-ui/react-primitive'
import { styled, CSS,  keyframes } from '../../stitches.config'

import { ListBox } from '../../compositions/ListBox'
import { Popover } from '../../compositions/Popover'
import { IconButton } from '../../primitives/IconButton'
import { useComboBoxState, Item, Section } from 'react-stately'
import { useComboBox, useFilter, useButton, useHover } from 'react-aria'
import type { ComboBoxProps } from '@react-types/combobox'

import { ArrowDownIcon } from '@radix-ui/react-icons'

// type TypeMenu = {
//     category: 'layout',
//     variants: 'heading' | 'plain' | 'code' | 'quote',
//     default: 'plain',
// };

// type AlignmentMenu = {
//     category: 'Alignment',
//     variants: 'left' | 'right' | 'center' | 'justify',
//     default: 'left',
// }

// type FontMenu = {
//     category: 'font',
//     variants: 'sans' | 'cursive' | 'monospace' | 'serif' | 'inter',
//     default: 'sans',
// }

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
    border: 'none',
    outline: 'none',
    overflow: 'hidden',
    backgroundColor: 'transparent'
});


const UserInput = styled('input', {
    padding: '$1',
    outline: 'none', 
    backgroundColor: '$panel',
    border: '1px solid $border',
    borderRadius: '$2',
    color: '$text',
    fontSize: '1',
    borderRight: 'none',
    borderTopRightRadius: 0, 
    borderBottomRightRadius: 0,
})


// interface ExtendedInputGroupProps {
//     inputProps: React.HTMLAttributes<HTMLInputElement>;
//     buttonProps: React.HTMLAttributes<HTMLButtonElement>;
//     inputRef: RefObject<HTMLInputElement>;
//     buttonRef: RefObject<HTMLButtonElement>;
//     icon: React.ReactNode;
//     focused: boolean;
  
// }

// const ExtendedInputGroup = React.forwardRef<
//     React.ElementRef<typeof InputGroup>,
//     Radix.ComponentPropsWithoutRef<typeof InputGroup> & ExtendedInputGroupProps
// >(({ inputProps, buttonProps, inputRef, buttonRef, icon, focused }, forwardedRef) => {
// });

 // let {hoverProps, isHovered} = useHover({
    //     onHoverStart: (e) => console.log(`hovering at ${e}`),
    //     onHoverEnd: (e) => console.log(`done hovering....`)
    // }); 

export function ComboBox<T extends object>(props: ComboBoxProps<T>) {

    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({ ...props, defaultFilter: contains });

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

            <InputGroup>
                <UserInput {...inputProps} ref={inputRef} />
                <IconButton 
                    {...buttonProps} 
                    ref={buttonRef}
                    size='2' 
                    variant='ghost' 
                    css={{ 
                        margin: 0, 
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0 
                    }}
                >
                    <ArrowDownIcon aria-hidden='true' /> 
                </IconButton> 
            </InputGroup>

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