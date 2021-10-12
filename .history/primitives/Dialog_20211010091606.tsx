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

const StyledForwardedRef = React.forwardRef<
    React.ElementRef<typeof StyledBottomModal>,
    Radix.ComponentPropsWithoutRef<typeof StyledBottomModal>
>

export const Select = React.forwardRef<React.ElementRef<typeof StyledSelect>, SelectProps>(
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