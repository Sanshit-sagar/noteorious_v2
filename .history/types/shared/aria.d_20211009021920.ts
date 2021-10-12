import { JSXElementConstructor } from "react";


export interface DOMProps {
    id: string;
}

export interface AriaLabelingProps {
    'aria-label': string;
    'aria-describedby': string;
    'aria-labelledby': string;
    'aria-details': string;
};

export interface AriaValidationProps {
    'aria-errormessage': string;
};


export interface FocusableDOMProps {
    excludeFromTabOrder: boolean;
};

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

export interface MolecularButtonProps<T extends ElementType='button'> extends AtomicButtonProps,ButtonProps,LinkButtonProps<T>, StyleProps {
    variant: 'primary' | 'secondary' | 'funky'; 
    isQuiet: boolean;
    isLoud: boolean;
    loading: boolean; 
}

export interface LinkButtonProps<T extends ElementType='button'> extends AriaButtonElementTypeProps<T> {
    href?: string;
    target?: string;
    rel?: string; 
}