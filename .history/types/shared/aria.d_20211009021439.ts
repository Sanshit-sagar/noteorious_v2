

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

export interface AtomicButtonProps extends FocusableDOMProps, AriaLabelingProps {
    'aria-expanded': string;
    'aria-describedby': string;
    'aria-labelledby': string;
    'aria-pressed': string;
    type: 'button' | 'reset' | 'submit';
}

export interface MolecularButtonProps<T extends ElementType='button'> extends AriaBaseButtonProps, ButtonProps, LinkButtonProps<T>, StyleProps {
    variant: 'primary' | 'secondary' | 'funky'; 
    isQuiet: boolean;
    isLoud: boolean;
    loading: boolean; 
}

export interface LinkButtonProps<T  extends ElementType='button'> extends AriaBaseButtonProps, ButtonProps, LinkButtonProps<T>,