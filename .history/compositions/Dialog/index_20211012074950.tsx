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
import { IconButton } from '../../primitives/IconButton'

import { Cross2Icon } from '@radix-ui/react-icons'

interface IDialogProps {
    triggerText: string;
    dialogTitle: string;
    dialogDescription: string;
    
}

export const DialogDemo = ({
    triggerText,
    dialogTitle,
    dialogDescription,
    dialogContent,
    handleCancel,
    handleConfirm
}: IDialogProps) => {
    // const handleConfirm = () => alert('confirm!!!')
    // const handleCancel = () => alert('cancel!!')

    

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button> {triggerText} </Button>
            </DialogTrigger>

            <DialogContent >
                <DialogTitle> 
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            
                <Text> Content </Text>

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
}