import React, { Key } from 'react'  
import { Select, Item } from '../../compositions/Select'
import { useListData } from 'react-stately'
import { useTreeState } from '@react-stately/tree'

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
};


function initHeadingStylePicker(): HeadingStyle[] {
    return [
        {name: 'Heading1', icon: <Heading1Icon /> },
        {name: 'Heading2', icon: <Heading2Icon /> },
        {name: 'Heading3', icon: <Heading3Icon /> },
        {name: 'Heading4', icon: <Heading4Icon /> },
        {name: 'Heading5', icon: <Heading4Icon /> },
        {name: 'Heading6', icon: <Heading4Icon /> },
    ];
}

function initAlignmentStylePicker(): AlignmentStyle[] {
    return [
        {name: 'L'}
    ]
}

export const HeadingSelector = () => {
    let headingStyles = useListData({
        initialItems: [...initHeadingStylePicker()],
        initialSelectedKeys: undefined, 
        getKey: (item: Item) => item.name
    });

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

export const AlignmentSelector = () => {
   let tree = useTreeData({
  initialItems: [
    {
      name: 'People',
      items: [{name: 'David'}, {name: 'Sam'}, {name: 'Jane'}]
    },
    {
      name: 'Animals',
      items: [{name: 'Aardvark'}, {name: 'Kangaroo'}, {name: 'Snake'}]
    }
  ],
  getKey: (item) => item.name,
  getChildren: (item) => item.items
});


    return (
        <Select label={'Alignment'} items={alignments.items}>
            {(item) => (
                <Item key={item.name}>
                    {item.icon}
                </Item>
            )}
        </Select>
    )
}