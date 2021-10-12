import { styled } from '../../stitches.config'
import { Flex } from '../Flex'

const List = styled('ul', {
    width: '100%',
    maxHeight: '200px',
    mb: '$2',
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

const ListItem = styled('li', {
    position: 'relative',
    width: '100%',
    color: '$accent',
    border: '1px solid $border',
    borderTop: 'none',
    bc: '$panel',
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    alignItems: 'stretch',
    padding: '$1 $2',
    userSelect: 'none',
    '&[data-disabled]': {
        color: '$accentContrast',
        pointerEvents: 'none',
    },
    '&:first-child': {
        borderTop: 'thin solid $border',
        borderTopRadius: 0,
    },
    "&:last-child": {
        borderBottomRightRadius: '$2',
        borderBottomLeftRadius: '$2',
        borderBottomColor: '$border',
    },
});


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
