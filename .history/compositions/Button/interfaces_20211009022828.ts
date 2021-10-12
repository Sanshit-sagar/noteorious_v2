import { JSXElementConstructor } from "react";
import { }
export interface ButtonProps extends PressEvents, FocusableProps {
    children: React.ReactNode;
    isDisabled: boolean; 
}

export interface AriaButtonElementTypeProps<T> {
    elementType?: T | JSXElementConstructor<T> 
}

export interface AtomicButtonProps extends FocusableDOMProps, AriaLabelingProps {
    'aria-expanded': string;
    'aria-describedby': string;
    'aria-labelledby': string;
    'aria-pressed': string;
    type: 'button' | 'reset' | 'submit';
}

export interface MolecularButtonProps<T extends ElementType='button'> extends AtomicButtonProps,ButtonProps,LinkButtonProps<T> {
    variant: 'primary' | 'secondary' | 'funky'; 
    loading?: boolean; 
}

export interface LinkButtonProps<T extends ElementType='button'> extends AriaButtonElementTypeProps<T> {
    href?: string;
    target?: string;
    rel?: string; 
}

export interface ToggleButtonProps<T extends ElementType='toggle'> extends AtomicButtonProps,LinkButtonProps<T>,AriaButtonElementTypeProps<T> {
    isEmphasized?: boolean; 
}