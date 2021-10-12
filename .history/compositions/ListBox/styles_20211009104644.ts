import { styled, css } from '../../stitches.config'

const List = styled('ul', {
    maxHeight: '300px',
    overflow: 'auto',
    listStyle: 'none',
    margin: '$2 $1',
    outline: 'none',
    padding: 0,
});

const ListItem = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'default',
    outline: 'none',
    padding: '$1',
    fontSize: '2',
})

export const ListItemIndicator = styled(Flex, {
    position: 'absolute', 
    left: '$1',
    width: '$3', 
    height: '$3', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: '$2', 
    backgroundColor: '$accent'
})


export const ItemContent = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

export const StyledDescription = styled('div', {
    fontWeight: 'normal',
    fontSize: '12px'
})