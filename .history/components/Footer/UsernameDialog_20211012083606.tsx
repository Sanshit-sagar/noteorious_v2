import { DialogWithOverlay } from '../../compositions/Dialog'
import { Text } from '../../primitives/Text'

export const UsernameDialog = () => (

    return (
        <DialogWithOverlay
            triggerText={'USER_NAME'}
            dialogTitle={'Username'}
            dialogDescription={'Enter your username below'}
            dialogContent={
                <>
                <Text> *** USERNAME GOES HERE *** </Text>
                </>
            }
            handleCancel={() => console.log('cancelling')}
            handleConfirm={() => console.log('confirming')}
        /> 
    )
}