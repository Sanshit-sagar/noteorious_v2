import React from 'react' 


const User = ({ }) => {

    return (
        <Select label={'Menu'} items={items}> 
            {(item) => (
                <Item textValue={item.name}>
                    <Avatar src={item.src} alt={item.name} />  

                    <div>
                        <Label> {item.name} </Label>
                        <Description> {</Description>
                    </div>
                </Item>
            )}
        </Select>
    )
}