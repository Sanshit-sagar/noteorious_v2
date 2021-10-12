import React from 'react'
import { styled, CSS } from '../stitches.config'
import * as Radix from '@radix-ui/react-primitive'


interface ExtdModalProps {
    isOpen: boolean;
    toggle: () => void;
    size: 'S' | 'M' | 'l'; 
    css: { CSS }
};

const LowRiderContainer = styled('div', {

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

type LowRiderProps = ExtdModalProps & { css?: CSS };


export const LowRider = React.forwardRef<
    React.ElementRef<typeof StyledBottomModal>, 
    LowRiderProps
>(({ css, isOpen, toggle, size, ...props }, forwardedRef) => (
    <LowRiderContainer css={css}>
        <StyledBottomModal {...props} ref={forwardedRef} />
    </LowRiderContainer>
)); 

LowRider.toString = () => `.${LowRiderContainer.className}`;