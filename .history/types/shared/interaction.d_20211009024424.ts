

type BaseEvent<T> = T & {
    stopPropagation: () => void;
    continuePropagation: () => void;
}

type KeyboardEvent = BaseEvent<ReactElement<any>>

export interface FocusEvents {
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onFocus?: (e: FocusEvent) => void;
}

export interface PressEvents {
    onPress?: (e: PressEvent) => void;
    onPressStart?: (e: PressEvent) => void;
    onPressEnd?: (e: PressEvent) => void;
    onPressUp?: (e: PressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
}

export interface KeyboardEvents {
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
}

export type PressType = 'pressstart' | 'pressend' | 'pressup' | 'press'
export type PressPointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'
export interface PressEvent { 
    type: PressType; 
    pointerType: PressPointerType;
    target: HTMLElement;
    shiftKey: boolean;
    ctrlKey: boolean; 
    metaKey: boolean;
    altKey: boolean;
}

export type HoverPointerType = 'mouse' | 'pen';
export interface HoverEvent {
    type: HoverType;
    pointerType: HoverPointerType;
    target: HTMLElement;
}

export interface FocusableProps extends FocusEvents, PressEvents {
    autoFocus?: boolean;
}