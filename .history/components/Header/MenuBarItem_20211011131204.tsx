import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'

const MenuItemButton = styled('button', {
    width: 30,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.40rem',
    color: '#0d0d0d',
    height: '1.75rem',
    marginRight: '0.25rem',
    padding: '0.25rem',
    '&:hover': {
        backgroundColor: '#0d0d0d',
        color: '#fff'
    }
});

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive,
    isDisabled
}: IMenuBarItem) => {
    let getStatus = () => {
        let active = isActive()
        let disabled = isDisabled()

        return disabled===true ? 'red' : active===true ? 'green' : 'white' 
    }

    return (
        <MenuItemButton onClick={action} css={{ backgroundColor: diio }}>
            {typeof icon==='string' ? title : icon}
        </MenuItemButton>
    );
}

