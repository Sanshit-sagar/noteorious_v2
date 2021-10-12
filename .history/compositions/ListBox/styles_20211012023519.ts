import { styled } from '../../stitches.config'
import { Flex } from '../Flex'

export const List = styled('ul', {
    width: '100%',
    maxHeight: '200px',
    backgroundColor: '$transparent',
    outline: 'none',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    margin: 0,
    padding: 0,
    border: '1px solid $border',
    borderTop: 'none',
    '&:hover': {
        borderColor: '$border3',
    },
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { 
                animationName: slideDownAndFade 
            },
            '&[data-side="right"]': { 
                animationName: slideLeftAndFade 
            },
            '&[data-side="bottom"]': { 
                animationName: slideUpAndFade 
            },
            '&[data-side="left"]': { 
                animationName: slideRightAndFade 
            },
        },
    },
});

export const ListItem = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'default',
    outline: 'none',
    padding: '$1',
    fontSize: '2',
    bc: 'transparent'
})

export const ListItemIndicator = styled(Flex, {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
})


export const ItemContent = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

export const StyledDescription = styled('div', {
    fontWeight: 'normal',
    fontSize: '12px'
})
