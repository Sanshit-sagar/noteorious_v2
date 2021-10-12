
export interface FocusEvents {
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onFocus?: (e: FocusEvent) => void;
}

export interface HoverEvents {
    onHoverChange?: (e: MouseEvent) => void;
    onHoverStart?: (e: MouseEvent) => void;
    onHoverEnd?: (e: MouseEvent) => void;
}

export interface PressEvents {
    onPress: (e: MouseEvent) => void;
    onPressStart?: (e: MouseEvent) => void;
    onPressEnd?: (e: MouseEvent) => void;
    onPressChange?: (e: MouseEvent) => void;
    onPressUp?:
}