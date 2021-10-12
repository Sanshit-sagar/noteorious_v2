import {
    Dialog,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogActionButton,
    DialogActions
} from '../../primitives/Dialog'

import { Text } from '../../primitives/Text'
import { Button } from '../../primitives/Button'

interface IDialogProps {
    triggerText: string;
    dialogTitle: string;
    dialogDescription?: string;
    dialogContent: string | React.ReactNode;
    handleCancel: () => void;
    handleConfirm: () => void;
}

export const M = ({
    triggerText,
    dialogTitle,
    dialogDescription,
    dialogContent,
    handleCancel,
    handleConfirm
}: IDialogProps) =>  (

    <Dialog>
        <DialogTrigger asChild>
            <Button> {triggerText} </Button>
        </DialogTrigger>

        <DialogContent >
            <DialogTitle> {dialogTitle} </DialogTitle>
            <DialogDescription> {dialogDescription} </DialogDescription>
        
            {       typeof dialogContent === 'string' 
                ?   <Text> Content </Text>
                :   <> {dialogContent} </>
            }

            <DialogActions>
                <DialogActionButton 
                    variant='cancel'
                    onClick={handleCancel}
                >
                    Cancel
                </DialogActionButton>
                <DialogActionButton 
                    variant='accent' 
                    onClick={handleConfirm}
                >
                    Confirm
                </DialogActionButton>
            </DialogActions> 

            <DialogClose />
        </DialogContent>
    </Dialog>
)