import React from 'react' 
import { styled } from '../../stitches.config'

import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

const MenuItem

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
