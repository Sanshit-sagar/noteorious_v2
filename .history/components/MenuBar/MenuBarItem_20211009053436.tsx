import React from 'react' 
import { styled } from '../../stitches.config'

import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

const MenuItemButton = styled('button', {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.4rem',
    color: '#0d0d0d',
    height: '1.4rem'
})

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive
}: IMenuBarItem) => {
    

    return (
        <button onPress={action} css={{ back }}>
            {isActive && isActive() ? '' : 'defalse'} {title} 
        </button>
    )
}
