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
    zIndex: 2,
    width: '100%',
    border: '1px solid $border',
    borderRadius: '$2',
    padding: '$1',
    bc: 'white',
    boxShadow: '$4'
})

export function Popover(props: PopoverProps) {

    let ref = useRef<HTMLDivElement>(null)
    let { popoverRef = ref, isOpen, onClose, children } = props 

    let { overlayProps } = useOverlay({
            isOpen,
            onClose,
            shouldCloseOnBlur: true, 
            isDismissable: false,
        },
        popoverRef,
    );

    return (
        <FocusScope restoreFocus>
            <Wrapper {...overlayProps} ref={popoverRef}>
                {children}
                <DismissButton onDismiss={onClose} /> 
            </Wrapper>
        </FocusScope>
    )
}

