

export interface DOMProps {
    'id': string;
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
    
}

