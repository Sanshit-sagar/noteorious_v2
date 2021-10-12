import React from 'react' 
import { styled } from '../../stitches.config'
import { IMenuBarItem } from './interfaces'
import { useHover } from 'react-aria'
import type { ValidDimensionType } from '../Icons'
import { IconProps, alignmentIcons } from '../Icons'


type WrapperProps = IconProps & { children: React.ReactNode; }; 

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
        onHoverStart: (_e) => console.log('hovering'),
        onHoverEnd: (_e) => console.log('done hovering')
    });
   
    return (
        <MenuItemButton {...hoverProps} onClick={action} css={{ border: '2px solid', borderColor: isHovered ? 'red' : '$border' }}>
            {typeof icon==='string' ? title : icon}
        </MenuItemButton>
    );
}


