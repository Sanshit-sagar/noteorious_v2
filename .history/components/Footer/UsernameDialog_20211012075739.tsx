import { DialogWithOverlay } from '../../compositions/DialogWithOverlay'
import { Text } from '../../primitives/Text'




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