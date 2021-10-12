import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'
import { useHover } from 'react-aria'

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
    const {hoverProps, isHovered} = useHover({
        onHoverStart: (e: HoverEvent) => console.log('hovering'),
        onHoverEnd: (e: HoverEvent) => console.log('done hovering')
    });
   
    return (
        <MenuItemButton {hoverProps} onClick={action}>
            {typeof icon==='string' ? title : icon}
        </MenuItemButton>
    );
}

