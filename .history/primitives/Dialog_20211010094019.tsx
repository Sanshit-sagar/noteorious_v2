import React from 'react'
import { styled, CSS } from '../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

type DialogSizeType = 'S' | 'M' | 'L'; 

interface ExtdModalProps {
    isOpen: boolean;
    toggle: () => void;
    size: DialogSizeType;
    css: { CSS }
}

type LowRiderProps = ExtdModalProps & { css?: CSS };

const LowRiderContainer = ({ 
    isOpen, 
    toggle, size, }: { 
    isOpen: boolean; 
    toggle: () => void; 
    size: DialogSizeType;
})

})

const StyledBottomModal = styled('div', {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    position: 'fixed',
    bottom: '0px',
    minHeight: '100px',
    width: '100%',
    padding: '20px 10px'
})

export const LowRider = React.forwardRef<
    React.ElementRef<typeof StyledBottomModal>, 
    LowRiderProps
>(({ css, isOpen, toggle, size, ...props }, forwardedRef) => (
    <LowRiderContainer, isOpen, toggle, size, css={css}>
        <StyledBottomModal {...props} ref={forwardedRef} />
    </LowRiderContainer>
)); 

LowRider.toString = () => `.${LowRiderContainer.className}`;