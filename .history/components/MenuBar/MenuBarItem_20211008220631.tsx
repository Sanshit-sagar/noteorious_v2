import React from 'react' 
import { IMenuBarItem } from './interfaces'

import { Button } from '../

export const MenuBarItem = ({ 
    icon, 
    title, 
    isActive,
    action,
    isDivider
}: IMenuBarItem) => {

    return (
        <Button onClick={action} title={title}>

        </Button>
    )
}
