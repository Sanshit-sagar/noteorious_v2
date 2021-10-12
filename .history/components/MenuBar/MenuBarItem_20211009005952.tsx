import React from 'react' 
import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button'

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive
}: IMenuBarItem) => {
    console.log(isActive)

    return (
        <Button onPress={action} styles={isActive && isActive() ? 'active' : 'inactive'}>
            {isActive && isActive() ? '' : 'defalse'} {title} 
        </Button>
    )
}
