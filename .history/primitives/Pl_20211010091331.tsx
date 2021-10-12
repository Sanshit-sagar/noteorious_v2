import styled from '../stitches.config'

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
    React.ComponentProps<typeof StyledBottomModal>,
    Radix.ComponentPropsWithoutRef

const WideLowHangingModal = () => {

}