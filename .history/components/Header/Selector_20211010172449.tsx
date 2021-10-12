import React, { Key } from 'react'  
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

let emptySelection: Key[]

function initHeadingStylePicker(): HeadingStyle[] {
    return [
        {name: 'Heading1', icon: <Heading1Icon />, action: () => alert(`Clicked H1`)},
        {name: 'Heading2', icon: <Heading2Icon />, action: () => alert(`Clicked H2`)},
        {name: 'Heading3', icon: <Heading3Icon />, action: () => alert(`Clicked H3`)},
        {name: 'Heading4', icon: <Heading4Icon />, action: () => alert(`Clicked H4`)},
        {name: 'Heading5', icon: <Heading4Icon />, action: () => alert(`Clicked H5`)},
        {name: 'Heading6', icon: <Heading4Icon />, action: () => alert(`Clicked H6`)}
    ];
}

export const HeadingSelector = () => {
    let headingStyles = useListData({
        initialItems: [...initHeadingStylePicker()],
        initialSelectedKeys: ['Heading1'],
        getKey: (item: Item) => item.name
    });

    return (
        <Select 
            label={'Headings'} 
            items={headingStyles.items}
            selectedKeys={headingStyles.selectedKeys}
            onSelectionChange={() => alert(`New Selection: ${JSON.stringify(headingStyles.selectedKeys)}`)
        >
            {(item) => (
                <Item key={item.name}> {item.icon} </Item>
            )}
        </Select>
    );
}