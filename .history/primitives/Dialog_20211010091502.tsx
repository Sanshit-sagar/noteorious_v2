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

const StyledForwardedRef = React.forward<
    React.ComponentProps<typeof StyledBottomModal>,
    Radix.ComponentPropsWithoutRef<typeof StyledBottomModal>
>

const WideLowHangingModal = () => {

}