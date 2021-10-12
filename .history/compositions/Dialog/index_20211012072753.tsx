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

            <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                <DialogClose asChild>
                    <Button aria-label="Close" variant="green">
                        Save changes
                    </Button>
                </DialogClose>
            </Flex>

            <DialogClose asChild>
                <IconButton>
                    <Cross2Icon />
                </IconButton>
            </DialogClose>
        </DialogContent>
    </Dialog>
);