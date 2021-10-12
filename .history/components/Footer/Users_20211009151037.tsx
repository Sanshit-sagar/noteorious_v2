import React from 'react' 
import { Description, Label } from '../../compositions/ListBox'
import { Select } from '../../compositions/Select'
import { Avatar } from '../../compositions/Avatar' 
import { AvatarProps } from '../../compositions/Avatar/interfaces'

import { Item } from 'react-stately' 

type SelectItem = AvatarProps & { description?: string; }

export const Users = ({ users }: { users: SelectItem[] }) => {

    return (
        <Select label={'Menu'} items={users}> 
            {(user) => (
                <Item textValue={user.name || user.id || user.fallback || 'Anonymous'}>
                    {user.image
                        ? <Avatar src={user.image} alt={user.id || user.fallback} />  
                        : null
                    }

                    <div>
                        <Label> {user.name} </Label>
                        <Description> {user.description} </Description>
                    </div>
                </Item>
            )}
        </Select>
    )
}