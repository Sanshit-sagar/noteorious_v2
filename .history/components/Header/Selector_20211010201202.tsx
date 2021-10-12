import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { ListBox, Section } from '../../compositions/ListBox'
import { useListData } from 'react-stately'
import { useTreeData } from '@react-stately/data'

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


function initHeadingSelector(): HeadingStyle[] {
    return [
        {name: 'Heading1', icon: <Heading1Icon /> },
        {name: 'Heading2', icon: <Heading2Icon /> },
        {name: 'Heading3', icon: <Heading3Icon /> },
        {name: 'Heading4', icon: <Heading4Icon /> },
        {name: 'Heading5', icon: <Heading4Icon /> },
        {name: 'Heading6', icon: <Heading4Icon /> },
    ];
}

export const HeadingSelector = () => {
    let headingStyles = useListData({
        initialItems: [...initHeadingSelector()],
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
type TextEditType = 'Type' | 'Alignment' | 'Font';

type TypeMenu = {
    category: 'Layout',
    variants: 'heading' | 'plain' | 'code' | 'quote'
    default: 'Plain'
};

type AlignmentMenu = {
    category: 'Alignment',
    variants: 'Left' | 'Right' | 'Center' | 'Justify'
    default: 'Left'
}

type FontMenu = {
    category: 'Font',
    variants: 'sans' | 'cursive' | 'monospace' | 'serif' | 'inter'
}

type FormatOption = {
    type: TextEditType;
    variants:  
}

export const TypeSelector = () => {
    let tree = useTreeData({
        initialItems: [
            {
                name: 'Type',
                items: [{ name: 'Plain' }, { name: 'Code Block' }, { name: 'Blockquote' }]
            },
            {
                name: 'Alignment',
                items: [{ name: 'Left'}, { name: 'Center'}, { name: 'Right' }, { name: 'Justify' }]
            }
        ],
        initialSelectedKeys: ['Plain', 'Left'],
        getKey: (item) => item.name,
        getChildren: (item) => item.items
    });
      

    return (
        <ListBox 
            items={tree.items}
            selectedKeys={tree.selectedKeys}
            onSelectionChange={tree.setSelectedKeys}
        >
            {(node) => (
               <Section title={node.value.name} items={node.children}>
                   {(node) => <Item>{node.value.name}</Item>}
               </Section>
            )}
        </ListBox>
    );
}