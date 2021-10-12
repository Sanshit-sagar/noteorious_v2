import { DialogWithOverlay } from '../../compositions/DialogWithOverlay'





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