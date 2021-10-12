import React, { RefObject, ElementType, HTMLAttributes } from 'react' 

import { useButton, useHover, mergeProps, FocusRing } from 'react-aria'
import { AriaButtonProps } from '@react-types/button'
import { ButtonAria } from '@react-aria/button'

import { FocusableRef, useFocusableRef } from '../utils/useRefs'
import { Button as StyledButton } from '../primitives/Button' 
import { classNames } from '../utils/classNames'
import { Text } from './Text'

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
        <FocusRing focusRingClass={classNames(styles, 'focus-ring')} autoFocus={autoFocus}>
            <StyledButton 
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
            </StyledButton>
        </FocusRing>
    )
}

const Button = React.forwardRef(AriaButton) as <
    T extends ElementType = 'button'
>(props: AriaButtonProps<T> & {ref: FocusableRef<HTMLElement>}) => ((props, forwardedRef) => {
    <AriaButton {...props} ref={forwardedRef} /> 
})

// interface AriaButtonProps<T> {
//     type?: 'button' | 'submit' | 'reset'; // def = 'button;
//     id?: 'string';
//     children: ReactNode;
//     isDisabled?: boolean; 
//     onPress?: (e: PressEvent) => void;
//     onPressStart?: (e: PressEvent) => void;
//     onPressEnd?: (e: PressEvent) => void;
//     onPressChange?: (e: PressEvent) => void;
//     onPressUp?: (e: PressEvent) => void;
//     autoFocus?: (e: FocusEvent) => void;
//     onFocus?: (e: FocusEvent) => void;
//     onBlur?: (e: FocusEvent) => void;
//     onFocusChange?: (e: FocusEvent) => void;
//     onKeyDown?: (e: KeyboardEvent) => void;
//     onKeyUp?: (e: KeyboardEvent) => void;
//     href?: string;
//     target?: string;
//     rel?: string;
//     elementType?: T;
//     excludeFromTabOrder?: boolean; 
//     'aria-expanded': boolean;
//     'aria-haspopup': boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
//     'aria-controls': string;
//     'aria-pressed': boolean;
//     'aria-label': string;
//     'aria-labelledby': string;
//     'aria-describedby': string;
//     'aria-details': string; 
// }

// type BaseEvent<T> = T & {
//     stopPropagation: () => void;
//     continuePropagation: () => void;
// }
// type KeyboardEvent = BaseEvent<ReactElement<any>>
// type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'
// type PressType = 'pressstart' | 'pressend' | 'pressup' | 'press'

// interface PressEvent { 
//     type: PressType; 
//     pointerType: PointerType;
//     target: HTMLElement;
//     shiftKey: boolean;
//     ctrlKey: boolean; 
//     metaKey: boolean;
//     altKey: boolean;
// }

