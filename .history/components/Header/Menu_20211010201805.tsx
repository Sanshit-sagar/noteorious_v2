import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { ListBox, Section } from '../../compositions/ListBox'
import { useListData } from 'react-stately'
import { useTreeData } from '@react-stately/data'

type TypeMenu = {
    category: 'layout',
    variants: 'heading' | 'plain' | 'code' | 'quote',
    default: 'plain',
};

type AlignmentMenu = {
    category: 'Alignment',
    variants: 'left' | 'right' | 'center' | 'justify',
    default: 'left',
}

type FontMenu = {
    category: 'font',
    variants: 'sans' | 'cursive' | 'monospace' | 'serif' | 'inter',
    default: 'sans',
}

type MenuOptions = FontMenu | AlignmentMenu | TypeMenu

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