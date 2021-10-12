import React from 'react' 
import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button/Button'

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive
}: IMenuBarItem) => {
    console.log(isActive)

    return (
        <Button onPress={action} classNames={isActive && isActive() ? 'active' : 'inactive'}>
            {isActive && isActive() ? '' : 'defalse'} {title} 
        </Button>
    )
}
