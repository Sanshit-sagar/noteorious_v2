import React from 'react'
import { styled, keyframes } from '@stitches/react'

import { Flex } from './Flex'
import { IconButton } from './IconButton'

import { blackA } from '@radix-ui/colors'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as Radix from '@radix-ui/react-primitive'

import { Cross2Icon } from '@radix-ui/react-icons'

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

const Root = ({ 
    children
}: { 
    children: React.ReactNode; 
}) => (
    <DialogPrimitive.Root>
        <StyledOverlay  />
        {children}
    </DialogPrimitive.Root>
);

const StyledContent = styled(DialogPrimitive.Content, {
    backgroundColor: '$loContrast', 
    text: '$hiContrast',
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

const DialogButton = styled('button', {
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
    width: '100%',
    display: 'flex',
    fd: 'row',
    jc: 'flex-end',
    ai: 'center',
    gap: '$1',
})

const DialogCloseButton = styled(IconButton, {
    all: 'unset', 
    position: 'absolute',
    top: 10,
    right: 10,
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$text',
    fontFamily: 'inherit',
    borderRadius: '100%',
    '&:hover': { 
        backgroundColor: '$accentPressed' 
    },
    '&:focus': { 
        boxShadow: `0 0 0 2px $accent` 
    },

})

interface DialogCloseProps {
    children: React.ReactNode; asChild: boolean, props: any;
}

export const DialogClose = React.forwardRef<
    React.ElementRef<typeof DialogCloseButton>,
    Radix.ComponentPropsWithoutRef<typeof DialogCloseButton>
>(({ children, asChild, ...props }: DialogCloseProps, forwardRef) => (
   {asChild 
        ? <DialogPrimitive.Close> {children} </DialogPrimitive.Close>
        :  <DialogPrimitive.Close> 
            <DialogCloseButton 
                {...props} 
                ref={forwardRef}
            > 
                {children} 
            </DialogCloseButton>
        </DialogPrimitive.Close>
    } 
));

export const Dialog = Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = StyledContent
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription

export const DialogActionButton = DialogButton
export const DialogActions = StyledActions
