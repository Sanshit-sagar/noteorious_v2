import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { useSelectState } from '@react-stately/list'

import {
    Heading1Icon,
    Heading2Icon,
    Heading3Icon,
    Heading4Icon 
} from '../../components/Icons'


export const Picker = () => {
    const state = useSelectState()
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