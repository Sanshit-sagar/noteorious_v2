import React, { Key } from 'react'  
import { Select, Item } from '../../compositions/Select'
import { ListBox, Section } from '../../compositions/ListBox'
import { useListData } from 'react-stately'
import { useTreeData, TreeNode } from '@react-stately/data'

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
        getKey: ((item: TreeNode<TreeNode<any>>) => item.name),
        getChildren: (item: TreeNode<TreeNode<any>>) => {
            return item.map((value: TreeNode<any>, index: number) => {
                return {
                    key: `node-${value}-${index}`,
                    value: value,
                    parentKey: value ?? '',
                    children: [],
                }
            })
        }
    });
      
    return (
        <ListBox 
            items={tree.items}
            selectedKeys={tree.selectedKeys}
            onSelectionChange={tree.setSelectedKeys}
        >
            {(node: TreeNode<any>) => (
               <Section title={node.value.name} items={node.children}>
                   {(node: TreeNode<any>) => <Item>{node.value.name}</Item>}
               </Section>
            )}
        </ListBox>
    );
}