import React from 'react' 
import { styled } from '../../stitches.config'

import { IMenuBarItem } from './interfaces'
// import { Button } from '../../compositions/Button/Button'
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'


const StyledIcon = styled('div', {
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


const MenuItemButton = styled('button', {
    width: 32,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.4rem',
    color: '#0d0d0d',
    height: '1.75rem',
    marginRight: '0.25rem',
    padding: '0.25rem',
    '&:hover': {
        backgroundColor: '#0d0d0d',
        color: '#fff'
    }
})




export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive,
    hoverProps
}: IMenuBarItem) => (
    <MenuItemButton onClick={action}>
        {typeof icon==='string' ? title : {icon} </div>}
    </MenuItemButton>
)

