
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
    onPress?: (e: PressEvent) => void;
    onPressStart?: (e: PressEvent) => void;
    onPressEnd?: (e: PressEvent) => void;
    onPressUp?: (e: PressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
}

export interface FocusableProps extends FocusE