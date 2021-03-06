import React from 'react'
import { styled, keyframes } from '@stitches/react'
import { Flex } from './Flex'
import { blackA } from '@radix-ui/colors'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const overlayShow = keyframes({
    '0%': { 
        opacity: 0 
    },
    '100%': { 
        opacity: 1 
    },
});

const contentShow = keyframes({
    '0%': { 
        opacity: 0, 
        transform: 'translate(-50%, -48%) scale(.96)'
    },
    '100%': { 
        opacity: 1, 
        transform: 'translate(-50%, -50%) scale(1)' 
    },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: blackA.blackA9,
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
});

function Root({ children, ...props }: { children: React.ReactNode; props: any[] | any | null | undefined; }) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay  />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
    backgroundColor: '$panel', 
    text: '$funkyText',
    br: '$1',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    padding: 25,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'transform',
    },
    '&:focus': { 
        border: '1px solid $border3' 
    },
}); 

const StyledTitle = styled(DialogPrimitive.Title, {
    margin: 0,
    color: '$accent',
    fontSize: 17,
    fontWeight: 500,
});

const StyledDescription = styled(DialogPrimitive.Description, {
    marginBottom: 20,
    color: '$funkyText',
    fontSize: 15,
    lineHeight: 1.5,
});


const AlertButton = styled('button', {
    display: 'inline-flex',
    ai: 'center',
    jc: 'center',
    br: '$1',
    padding: '$1 $2',
    ml: '$1', 
    mr: '$1',
  
    variants: {
        variant: {
            cancel: {
                backgroundColor: 'white',
                color: '$white',
                border: '1px solid $accent',
                '&:hover': {
                    backgroundColor: 'gainsboro',
                    borderColor: '$accentHover',
                },
                '&:focus': {
                    backgroundColor: '$gainsboro',
                    borderColor: '$accentPressed'
                }
            },
            red: {
                backgroundColor: '$panel',
                color: 'red',
                boxShadow: `0 2px 10px maroon`,
                '&:hover': { 
                    backgroundColor: '$neutral' 
                },
                '&:focus': { 
                    boxShadow: `0 0 0 2px crimson` 
                },
            },
            green: {
                backgroundColor: '$panel',
                color: 'lime',
                '&:hover': { 
                    backgroundColor: '$neutral' 
                },
                '&:focus': { 
                    backgroundColor: `0 0 0 2px emarald` 
                },
            },
            accent: {
                backgroundColor: '$accent',
                color: '$text',
                '&:hover': { 
                    backgroundColor: '$accentHover' 
                },
                '&:focus': { 
                    boxShadow: `0 0 0 2px $accentPressed` 
                },
            },
        },
    },
    defaultVariants: {
        variant: 'accent',
    },
})

const StyledActions = styled(Flex, {
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$1',
})

export const Dialog = Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = StyledContent
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close
export const DialogButton = AlertButton
export const DialogActions = StyledActions

// const IconButton = styled('button', {
//   all: 'unset',
//   fontFamily: 'inherit',
//   borderRadius: '100%',
//   height: 25,
//   width: 25,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: violet.violet11,
//   position: 'absolute',
//   top: 10,
//   right: 10,

//   '&:hover': { backgroundColor: violet.violet4 },
//   '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
// });

// const Fieldset = styled('fieldset', {
//   all: 'unset',
//   display: 'flex',
//   gap: 20,
//   alignItems: 'center',
//   marginBottom: 15,
// });

// const Label = styled('label', {
//   fontSize: 15,
//   color: violet.violet11,
//   width: 90,
//   textAlign: 'right',
// });

// const Input = styled('input', {
//   all: 'unset',
//   width: '100%',
//   flex: '1',
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: 4,
//   padding: '0 10px',
//   fontSize: 15,
//   lineHeight: 1,
//   color: violet.violet11,
//   boxShadow: `0 0 0 1px ${violet.violet7}`,
//   height: 35,

//   '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
// });

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="large">Edit profile</Button>
    </DialogTrigger>
    <DialogContent >
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
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

export default DialogDemo;
