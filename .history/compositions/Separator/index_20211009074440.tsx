import { styled } from '@stitches/react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: 'black',
    '&[data-orientation=horizontal]': { 
        height: 1, 
        width: '100%' 
    },
    '&[data-orientation=vertical]': { 
        height: '100%', 
        width: 1 
    },
    variants: {
        size: {
            '1': {
                '&[data-orientation=horizontal]': { 
                    height: '1rem',
                    width: '100%',
                },
                '&[data-orientation=vertical]': { 
                    height: '100%',
                    width: '1rem',
                },
            },
            '2': {
                '&[data-orientation=horizontal]': { 
                    height: '2rem',
                    width: '100%',
                },
                '&[data-orientation=vertical]': { 
                    height: '100%',
                    width: '2rem',
                },
            },
            '3': {
                '&[data-orientation=horizontal]': { 
                    height: '3rem',
                    width: '100%',
                },
                '&[data-orientation=vertical]': { 
                    height: '100%',
                    width: '3rem',
                },
            }
        }
    },
    defaultVariants: {
        
    }
})

export const Separator = StyledSeparator
