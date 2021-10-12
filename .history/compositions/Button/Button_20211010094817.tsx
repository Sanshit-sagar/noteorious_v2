import React, { RefObject, ElementType, HTMLAttributes } from 'react' 
import * as Radix from '@radix-ui/react-primitive'

import { useButton, useHover, mergeProps, FocusRing } from 'react-aria'
import { AriaButtonProps } from '@react-types/button'
import { ButtonAria } from '@react-aria/button'

import { FocusableRef, useFocusableRef } from '../../utils/useRefs'
import { Button as StyledButton } from '../../primitives/Button' 
import { classNames } from '../../utils/classNames'
import { Text } from '../Text'

interface IUseHoverProps {
    hoverProps: HTMLAttributes<HTMLElement>;
    isHovered: boolean;
}

function AriaButton<T extends ElementType = 'button'>(props: AriaButtonProps<ElementType>, ref: FocusableRef<HTMLButtonElement>) {
    
    // omitted  variant, isQuiet,
    let { 
        elementType: ElementType = 'button', 
        children, 
        isDisabled, 
        autoFocus, 
        ...otherProps 
    }: AriaButtonProps<ElementType<any>> = props; 
   
    
    let domRef: RefObject<HTMLButtonElement> = useFocusableRef<HTMLButtonElement>(ref) 
    let { buttonProps, isPressed }: ButtonAria<HTMLAttributes<HTMLButtonElement>> = useButton(props, domRef);
    let { hoverProps, isHovered }: IUseHoverProps = useHover({ isDisabled });

    let styles = { 
        isDisabled: isDisabled?.toString() ?? 'false', 
        isPressed: isPressed?.toString() ?? 'false', 
        isHovered: isHovered?.toString() ?? 'false',
        variant: 'default' 
    };

    return (
        <FocusRing 
            focusRingClass={classNames(styles, 'focus-ring')} 
            autoFocus={autoFocus}
        >
            <ElementType 
                {...mergeProps(buttonProps, hoverProps)}
                ref={domRef}
                className={
                    classNames({
                        'is-disabled': isDisabled?.toString() ?? 'false',
                        'is-active': isPressed?.toString() ?? isPressed,
                        'is-hovered': isHovered?.toString() ?? isHovered
                    })
                }
            >
                {typeof children === 'string'
                    ? <Text> {children} </Text>  
                    : children
                }
            </ElementType>
        </FocusRing>
    )
}
const AtomicButtonProps<T> = AriaButtonProps<T> & { ref?: typeof FocusableRef<HTMLElement> });

const Button = React.forwardRef(AriaButton) as <
    T extends ElementType = 'button'
>(props: typeof AtomicButtonProps<T>) => React.ReactElement
