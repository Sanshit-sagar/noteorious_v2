import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogActionButton, 
    DialogActions,
} from '../../primitives/Dialog'

import { Text } from '../../primitives/Text'
import { Flex } from '../../primitives/Flex'
import { Button } from '../../primitives/Button'
import { IconButton } from '../../primitives/IconButton'

import { Cross2Icon } from '@radix-ui/react-icons'

export const DialogDemo = () => (
    <Dialog>
        <DialogTrigger asChild>
            <Button>
                Edit profile
            </Button>
        </DialogTrigger>

        <DialogContent >
            <DialogTitle> Edit profile </DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
        
            <Text> CONTENT GOES HERE </Text>

            <DialogActions>
                <AlertDialogCancel asChild>
                    <AlertDialogButton 
                        variant='cancel'
                        onClick={handleCancel}
                    >
                        {cancelText}
                    </AlertDialogButton>
                </AlertDialogCancel>
                
                <AlertDialogAction asChild>
                    <AlertDialogButton 
                        variant='accent' 
                        onClick={handleConfirm}
                    >
                        {confirmText}
                    </AlertDialogButton>
                </AlertDialogAction>
            </AlertDialogActionsRow> 

            <DialogClose asChild>
                <IconButton>
                    <Cross2Icon />
                </IconButton>
            </DialogClose>
        </DialogContent>
    </Dialog>
);