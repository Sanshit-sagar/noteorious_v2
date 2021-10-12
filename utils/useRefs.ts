import { Ref, RefObject, useImperativeHandle, useMemo, useRef} from 'react'

export interface DOMRefValue<T extends HTMLElement = HTMLElement> {
    UNSAFE_getDOMNode(): T
}
export interface FocusableRefValue<T extends HTMLElement = HTMLElement, D extends HTMLElement = T> extends DOMRefValue<D> {
    focus(): void
}
export type DOMRef<T extends HTMLElement = HTMLElement> = Ref<DOMRefValue<T>>;
export type FocusableRef<T extends HTMLElement = HTMLElement> = Ref<FocusableRefValue<T>>;



export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T>): DOMRefValue<T> {
    return {
        UNSAFE_getDOMNode() {
            return ref.current
        }
    };
}

export function createFocusableRef<T extends HTMLElement = HTMLElement>(domRef: RefObject<T>, focusableRef: RefObject<HTMLElement> = domRef): FocusableRefValue<T> {

    return {
        ...createDOMRef(domRef),
        focus() {
            if (focusableRef.current) {
                focusableRef.current.focus()
            }
        }
    };
}

export function useFocusableRef<T extends HTMLElement = HTMLElement>(ref: FocusableRef<T>, focusableRef?: RefObject<HTMLElement>): RefObject<T> {

    let domRef = useRef<T>(null);

    useImperativeHandle(ref, () => {
        return createFocusableRef(domRef, focusableRef)
    });

    return domRef;
}

