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
        <Button onPress={action}>
            {isActive() ? 'true' ?? 'defalse'} {title} 
        </Button>
    )
}
