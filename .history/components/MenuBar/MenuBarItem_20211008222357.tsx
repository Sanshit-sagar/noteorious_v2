import React from 'react' 
import { IMenuBarItem } from './interfaces'

import { Button } from '../../compositions/Button'

export const MenuBarItem = ({ 
    icon, 
    title, 
    action,
    isActive = null,
    action,
    isDivider
}: IMenuBarItem) => {

    return (
        <Button onPress={action}>
            {title} 
        </Button>
    )
}
