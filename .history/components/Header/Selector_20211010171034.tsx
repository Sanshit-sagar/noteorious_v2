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
    textValue: HeadingVariant;
    title?: React.ReactNode | undefined;
    action: () => void; 
};

function initHeadingStylePicker(): HeadingStyle[] {
    return [
        {textValue: 'Heading1', title: <Heading1Icon />, action: () => alert(`Clicked H1`)},
        {textValue: 'Heading2', title: <Heading2Icon />, action: () => alert(`Clicked H2`)},
        {textValue: 'Heading3', title: <Heading3Icon />, action: () => alert(`Clicked H3`)},
        {textValue: 'Heading4', title: <Heading4Icon />, action: () => alert(`Clicked H4`)},
        {textValue: 'Heading5', title: <Heading4Icon />, action: () => alert(`Clicked H5`)},
        {textValue: 'Heading6', title: <Heading4Icon />, action: () => alert(`Clicked H6`)}
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
                <Item key={item.name} textValue={item.action}> 
                    {item.title} 
                </Item>
            )}
        </Select>
    );
}