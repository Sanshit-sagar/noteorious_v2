import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { ListBox, Section } from '../../compositions/ListBox'
import { useListData } from 'react-stately'
import { useTreeData } from '@react-stately/data'
import { Text } from '../../primitives/Text'

import {
    Heading1Icon,
    Heading2Icon,
    Heading3Icon,
    Heading4Icon 
} from '../../components/Icons'
import { IMenuBarItem } from './interfaces'

interface Item {
    name: string; 
}[]; 

type HeadingVariant = 
                | 'Heading1' 
                | 'Heading2' 
                | 'Heading3' 
                | 'Heading4' 
                | 'Heading5' 
                | 'Heading6'

type HeadingStyle = { 
    name: HeadingVariant;
    icon?: React.ReactNode | undefined;
};


export const MenuBarSelect = ({ items }: { items: IMenuBarItem[] }) => {
    // let headingStyles = useListData({
    //     initialItems: [...initHeadingSelector()],
    //     initialSelectedKeys: undefined, 
    //     getKey: (item: Item) => item.name
    // });
    let headingStyleItems = items.map((item, index) => 
        return { 
            {
                item: item.title, icon: item.icon,  });

    return (
        <Select 
            label={'Headings'} 
            items={headingStyles.items}
        >
            {(item) => (
                <Item key={item.name}> 
                     {item.icon} 
                </Item>
            )}
        </Select>
    );
}
