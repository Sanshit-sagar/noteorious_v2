import React from 'react' 
import { Description } from '../../compositions/ListBox'


const User = ({ }) => {

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