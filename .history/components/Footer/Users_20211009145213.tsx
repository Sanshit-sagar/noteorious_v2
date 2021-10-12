import React from 'react' 
import { Description, Label } from '../../compositions/ListBox'
import { Select } from '../../compositions/Select'
import { Avatar } from '../../compositions/Avatar' 
import { AvatarProps } from '../../compositions/Avatar/interfaces'

import { Item } from 'react-stately' 

type SelectItem = AvatarProps & { description?: string; }

export const Users = ({ users }: { users: SelectItem[] }) => {

    return (
        type SelectItem = AvatarProps & { description?: string; }
        <Select label={'Menu'} items={users}> 
            {(user) => (
                <Item textValue={user.name || item.id || item.fallback || 'Anonymous'}>
                    {user.image 
                        ? <Avatar src={item.image} alt={item.id || item.fallback} />  
                        : null
                    }

                    <div>
                        <Label> {item.name} </Label>
                        <Description> {item.description} </Description>
                    </div>
                </Item>
            )}
        </Select>
    )
}