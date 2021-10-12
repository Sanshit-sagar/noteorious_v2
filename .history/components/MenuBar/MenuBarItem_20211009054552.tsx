import React from 'react' 
import { styled } from '../../stitches.config'

import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

const MenuItemButton = styled('button', {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.4rem',
    color: '#0d0d0d',
    height: '1.75rem',
    marginRight: '0.25rem',
    padding: '0.25rem',
    width: '0.75rem'
})

const StyledIcon = styled('svg', {
    fill: 'red',
    height: '100%',
    width: '100%',
    '&:hover': {
        backgroundColor: '#0d0d0d',
        color: '#fff',
    },
    '&:[data-state=active]': {
        backgroundColor: '#0d0d0d',
        color: '#fff',
    }
}); 



export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive
}: IMenuBarItem) => (
    <MenuItemButton onPress={action}>
        {title} 
    </MenuItemButton>
)

