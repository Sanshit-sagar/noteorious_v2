import React from 'react' 
import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive
}: IMenuBarItem) => {
    

    return (
        <Button onPress={action}>
            {isActive && isActive() ? '' : 'defalse'} {title} 
        </Button>
    )
}
