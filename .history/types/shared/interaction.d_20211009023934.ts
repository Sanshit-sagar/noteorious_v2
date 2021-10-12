

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

type PressPointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'
type PressType = 'pressstart' | 'pressend' | 'pressup' | 'press'

interface PressEvent { 
    type: PressType; 
    pointerType: PointerType;
    target: HTMLElement;
    shiftKey: boolean;
    ctrlKey: boolean; 
    metaKey: boolean;
    altKey: boolean;
}

interface HoverEvent {
    type: HoverType;
    pointerType: HoverPointerType;
    target: HTMLElement;
}

export interface FocusableProps extends FocusEvents, PressEvents {

}