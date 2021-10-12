import React from 'react'  
import { Select, Item } from '../../compositions/Select'
import { useListData } from 'react-stately'

import { IMenuBarItem } from './interfaces'
import { Text } from '../../primitives/Text'

interface Item {
    name: string; 
}[]; 

export const MenuBarSelect = ({ items }: { items: IMenuBarItem[] }) => {

    let headingStyles = useListData({
        initialItems: items.map((item: IMenuBarItem, index: number) => {
            return { 
                id: index,
                name: item.title, 
                icon: item.icon, 
                action: item.action 
            };
        }),
        initialSelectedKeys: undefined,
        getKey: (item: Item) => item.name,
    })

    return (
        <Select 
            label={'Headings'} 
            items={headingStyles.items}
            onSelectionChange={(key: React.Key) => {
                alert('Changing heading to: ')
                headingStyles.getItem(key).action()
            }}
        >
            {(item) => (
                <Item key={item.name}> 
                    {item.icon} 
                </Item>
            )}
        </Select>
    );
}
