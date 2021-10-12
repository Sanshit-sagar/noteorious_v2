import { DialogWithOverlay } from '../../compositions/Dialog'
import { Text } from '../../primitives/Text'

export const UsernameDialog = () => (
    <DialogWithOverlay
        triggerText={'USER_NAME'}
        dialogTitle={'Username'}
        dialogDescription={'Enter your username below'}
        dialogContent={'USERNAME GOES HERE'
            </>
        }
        handleCancel={() => console.log('cancelling')}
        handleConfirm={() => console.log('confirming')}
    /> 
)