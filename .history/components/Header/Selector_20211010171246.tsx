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
    action: () => void; 
};

function initHeadingStylePicker(): HeadingStyle[] {
    return [
        {name: 'Heading1', children: <Heading1Icon />, action: () => alert(`Clicked H1`)},
        {name: 'Heading2', children: <Heading2Icon />, action: () => alert(`Clicked H2`)},
        {name: 'Heading3', children: <Heading3Icon />, action: () => alert(`Clicked H3`)},
        {name: 'Heading4', children: <Heading4Icon />, action: () => alert(`Clicked H4`)},
        {name: 'Heading5', children: <Heading4Icon />, action: () => alert(`Clicked H5`)},
        {name: 'Heading6', children: <Heading4Icon />, action: () => alert(`Clicked H6`)}
    ];
}

export const HeadingSelector = () => {
    let headingStyles = useListData({
        initialItems: [...initHeadingStylePicker()],
        initialSelectedKeys: [],
        getKey: (item: Item) => item.name
    });

    return (
        <Select 
            label={'Headings'} 
            defaultSelectedKey={'heading1'}
            items={headingStyles.items}
        >
            {(item) => (
                <Item key={item.name} title={item.}> 
                    {item.icon} 
                </Item>
            )}
        </Select>
    );
}