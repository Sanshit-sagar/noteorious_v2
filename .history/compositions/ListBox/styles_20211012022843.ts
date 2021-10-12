import { styled } from '../../stitches.config'
import { Flex } from '../Flex'

export const List = styled('ul', {
    maxHeight: '200px',
    overflow: 'auto',
    listStyle: 'none',
    outline: 'none',
    padding: 0,
    bc: 'transparent',
    overflowX: 'hidden',
    overflowY: 'hidden'
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
