import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { useListData } from 'react-stately'

import {
    Heading1Icon,
    Heading2Icon,
    Heading3Icon,
    Heading4Icon 
} from '../../components/Icons'

interface Item {
    name: string; 
}[]; 

type HeadingStyle = { name: HeadingVariant };

function initHeadingStylePicker(): HeadingStyle[] {
    return [
        {name: 'Heading1'},{name: 'Heading2'},{name: 'Heading3'},
        {name: 'Heading4'},{name: 'Heading5'},{name: 'Heading6'}
    ];
}

export const Picker = () => {
    let headingStyles = useListData({
        initialItems: [...initHeadingStylePicker()],
        initialSelectedKeys: [],
        getKey: (item: Item) => item.name
    })

    return (
        <Select 
            label={'Headings'} 
            defaultSelectedKey={'heading1'}
        >
            <Item key={'heading1'}>
                <Heading1Icon />
            </Item>
            <Item key={'heading2'}>
                <Heading2Icon /> 
            </Item>
            <Item key={'heading3'}>
                <Heading3Icon /> 
            </Item>
            <Item key={'heading4'}>
                <Heading4Icon /> 
            </Item>
        </Select>
    );
}


// const MenuBarSelector = ({ 
//     icon,
//     title, 
//     action, 
//     isActive = false, 
//     isDisabled = false, 
//     isHovered ,
//     type = 'select', 
//     selectProps 
// }) => {
//     return (
//         <Picker /> 
//     );
// }