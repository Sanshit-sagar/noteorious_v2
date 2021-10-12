import React from 'react' 
import { Description, Label } from '../../compositions/ListBox'
import { Select } from '../../compositions/Select'
import { Avatar } from '../../compositions/Avatar' 
import { AvatarProps } from '../../compositions/Avatar/interfaces'

import { Item } from 'react-stately' 

type SelectItem = AvatarProps & { description?: string; }

export const User = ({ items }: { items: SelectItem[] }) => {

    return (
        <Select label={'Menu'} items={items}> 
            {(item) => (
                <Item textValue={item.name || item.id || item.fallback || 'Anonymous'}>
                    {item.image &&
                        <Avatar src={item.image} alt={item.id || item.fallback} />  
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