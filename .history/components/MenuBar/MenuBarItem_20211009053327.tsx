import React from 'react' 
import { styled } from '../../'
import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

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
