import React from 'react' 


const User = ({ }) => {

    return (
        <Select label={'Menu'} items={items}> 
            {(item) => (
                <Item textValue={item.name}>
                    
                </Item>
            )}
        </Select>
    )
}