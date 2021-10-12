import React from 'react'
import { styled, CSS } from '../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

const StyledWrapper = styled('div', {

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

interface ExtdLowRiderProps {
    isOpen: boolean;
    toggle: () => void;
    size: 'S' | 'M' | 'l'; 
    css: { CSS }
};

type LowRiderProps = ExtdLowRiderProps & { css?: CSS };


export const StyledForwardedRef = React.forwardRef<
    React.ElementRef<typeof StyledBottomModal>, 
    LowRiderProps
>(({ css, isOpen, toggle, size, ...props }, forwardedRef) => (
    <StyledWrapper css={css}>
        <StyledBottomModal {...props} ref={forwardedRef}>
           
        </StyledBottomModal>
    </StyledWrapper>
)

Select.toString = () => `.${SelectWrapper.className}`;