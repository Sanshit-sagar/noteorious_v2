import React from 'react'
import styled from '../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

const StyledBottomModal = styled('div', {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    position: 'fixed',
    bottom: '0px',
    minHeight: '100px',
    width: '100%',
    padding: '20px 10px'
})

interface LowRiderProps {
    isOpen: boolean;
    toggle: () => void;
    size: 'S' | 'M' | 'l'; 
}

const StyledForwardedRef = React.forwardRef<
    React.ElementRef<typeof StyledBottomModal>,
    Radix.ComponentPropsWithoutRef<typeof StyledBottomModal>
>((forwardedRef, props) => (
    
))

export const LowRiderDialog = React.forwardRef<React.ElementRef<typeof StyledSelect>, SelectProps>(
    ({ css, ...props }, forwardedRef) => (
        <SelectWrapper css={css}>
            <StyledSelect 
                ref={forwardedRef} 
                {...props} 
            />
        </SelectWrapper>
    )
);

const WideLowHangingModal = () => {

}