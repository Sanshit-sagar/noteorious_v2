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

import { Cross2Icon } from '@radix-ui/react-icons'

interface IDialogProps {
    triggerText: string;
    dialogTitle: string;
    dialogDescription?: string;
    dialogContent: string | React.ReactNode;
    handleCancel: () => void;
    handleConfirm: () => void;
}

export const DialogWithOverlay = ({
    triggerText,
    dialogTitle,
    dialogDescription,
    dialogContent,
    handleCancel,
    handleConfirm
}: IDialogProps) =>  (

    <Dialog>
        <DialogTrigger asChild>
            <Button> {dialogDescription} </Button>
        </DialogTrigger>

        <DialogContent >
            <DialogTitle> {dialogTitle} </DialogTitle>
            <DialogDescription> {dialogDescription} </DialogDescription>
            
            <Text> Content </Text> 
           
            <DialogActions>
                {/* <DialogClose asChild> */}
                    <DialogActionButton 
                        variant='cancel'
                        onClick={handleCancel}
                    >
                        Cancel
                    </DialogActionButton>
                </DialogClose>

                <DialogClose asChild>
                    <DialogActionButton 
                        variant='accent' 
                        onClick={handleConfirm}
                    >
                        Confirm
                    </DialogActionButton>
                </DialogClose>
            </DialogActions> 

            <DialogClose>
                <Cross2Icon /> 
            </DialogClose>
        </DialogContent>
    </Dialog>
)