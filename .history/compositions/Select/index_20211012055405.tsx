import React, { useEffect, useRef } from 'react'
import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

import { 
    useHover,
    useButton,
    useSelect,
    mergeProps,
    useFocusRing,
    HiddenSelect,
} from 'react-aria'
import { useSelectState, SelectState } from 'react-stately'
import type { AriaSelectProps } from '@react-types/select'

import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import { Wrapper, Label } from '../Shared'
import { Text } from '../Text'
export { Item } from 'react-stately'
import { TriangleDownIcon } from '@radix-ui/react-icons'

interface ButtonProps {
    isOpen?: boolean;
    isFocusVisible?: boolean;
    isHovered?: boolean; 
};

export const StyledButton = styled('div', {
    appearance: 'none',
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '$1',
    gap: '$1',
    backgroundColor: '$loContrast',
    
    variants: {
        size: {
            '1': {
                width: '25px',
            },
            '2': {
                width: '100%',
                minWidth: '50px',
                maxWidth: '100px',
                textOverflow: 'clip'
            },
            '3': {
                width: '100%',
                minWidth: '100px',
                maxWidth: '150px',
                textOverflow: 'clip'
            },
            '4': {
                width: '150px',
            },
        },
    },
    defaultVariants: {
        size: '2'
    }
});

export const StyledValue = styled('div', {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'space-between',
})

export const StyledIcon = styled('div', {
    color: '$border',
    '&:hover': {
        color: '$border3'
    },
    marginLeft: '$3'
});

const ExtendedTriggerButton = React.forwardRef<
    React.ElementRef<typeof StyledButton>,
    Radix.ComponentPropsWithoutRef<typeof StyledButton> & ButtonProps
>(({ children, isOpen, isFocusVisible, isHovered, ...props }, forwardedRef) => ( 
    <StyledButton 
        {...props} 
        ref={forwardedRef} 
        css={{
            backgroundColor: isOpen ? "$neutral" : isHovered ? '$neutral' : '$loContrast',
            border: '2px solid',
            borderColor: isFocusVisible ? '$funky' : '$border', 
            borderRadius: '$2',
        }}
    >
        {children}
    </StyledButton>  
));

export type VariantType = 'primary' | 'secondary' | 'funky' | 'grayscale'
export type SelectContentType = 'icons' | 'text' | 'items' | 'sections' | 'mixed'


export type AtomicSelectProps<T> = AriaSelectProps<T> & {
    variant?: VariantType;
    type?: SelectContentType;
    withTooltip?: boolean;// default = false,
    excludeLabel?: boolean
};

export function Select<T extends object>(allProps: AtomicSelectProps<T>) {
  
    let { variant, type, withTooltip, excludeLabel, ...props } = allProps
    let state = useSelectState(props)
   
    let ref = useRef(null)
    let { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref)
    let { buttonProps } = useButton(triggerProps, ref)
    let { focusProps, isFocusVisible } = useFocusRing()

    let { hoverProps, isHovered } = useHover({
        onHoverStart: (e) => console.log('hovering trigger'),
        onHoverEnd: (e) => console.log('hovering')
    })

    useEffect(() => {
        if(state.collection.at(0).rendered && !state.selectedItem) {
            state.setSelectedKey(state.collection.at(0).key)
        }
    }); 

    return (
        <Wrapper>
            {excludeLabel &&
                <Label {...labelProps}> 
                    <Text>{props.label} </Text>
                </Label>    
            }
                
            <HiddenSelect
                state={state}
                triggerRef={ref}
                label={props.label}
                name={props.name}
            />
            <ExtendedTriggerButton
                {...mergeProps(buttonProps, mergeProps(hoverProps, focusProps))}
                ref={ref}
                isOpen={state.isOpen}
                isFocusVisible={isFocusVisible}
                isHovered={isHovered}
            >
                <StyledValue {...valueProps}>
                   <Text> {state.selectedItem ? state.selectedItem.rendered : state.collection.at(0).rendered || 'Select...'} </Text>
                    <StyledIcon>
                        <TriangleDownIcon /> 
                    </StyledIcon>
                </StyledValue>
            </ExtendedTriggerButton>

            {state.isOpen && (
                <Popover isOpen={state.isOpen} onClose={state.close}>
                    <ListBox {...menuProps} state={state} /> 
                </Popover>
            )}
        </Wrapper> 
    );
}
