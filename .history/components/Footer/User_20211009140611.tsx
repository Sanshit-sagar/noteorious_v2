import React from 'react' 
import { Description, Label } from '../../compositions/ListBox'
import { Select } from '../../compositions/Select'

import { Item } from 'react-stately' 

const User = ({ }) => {

    let items = [
        { }
    ]

    return (
        <Select label={'Menu'} items={items}> 
            {(item) => (
                <Item textValue={item.name}>
                    <Avatar src={item.src} alt={item.name} />  

                    <div>
                        <Label> {item.name} </Label>
                        <Description> {item.description} </Description>
                    </div>
                </Item>
            )}
        </Select>
    )
}