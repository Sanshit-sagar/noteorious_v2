import React, { RefObject, useRef } from "react"
import { styled } from '../../stitches.config'
import { useOverlay, DismissButton, FocusScope } from "react-aria"

interface PopoverProps {
    popoverRef?: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const Wrapper = styled('div', {
    position: 'absolute',
    top: '100%',
    zIndex: 1,
    width: '100%',
    border: '1px solid lightgray',
    borderRadius: '4px',
    marginTop: '6px',
    boxShadow: '0 4px 8px #eee',
    background: 'white'
})

export function Popover(props: PopoverProps) {
    let ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null!)
    let { popoverRef = ref, isOpen, onClose, children } = props 

    let { overlayProps } = useOverlay({
            isOpen,
            onClose,
            shouldCloseOnBlur: true, 
            isDismissable: true,
        },
        popoverRef,
    );


    return (
        <FocusScope restoreFocus>
            <Wrapper
        </FocusScope>
    )
}

