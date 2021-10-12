import { DialogWithOverlay } from '../../compositions/DialogWithOverlay'
import { Text } from '../../compositions/Text'




const UsernameDialog = () => {

    return (
        <DialogWithOverlay
            dialogTitle={'Username'}
            dialogDescription={'Enter your username below'}
            dialogContent={
                <>
                <Text> *** USERNAME GOES HERE *** </Text>
                </>
            }
    )
}