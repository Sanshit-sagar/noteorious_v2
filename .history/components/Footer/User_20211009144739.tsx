import React from 'react' 
import { Description, Label } from '../../compositions/ListBox'
import { Select } from '../../compositions/Select'
import { Avatar } from '../../compositions/Avatar' 
import { AvatarProps } from '../../compositions/Avatar/interfaces'

import { Item } from 'react-stately' 

type SelectItem = AvatarProps, 

let items: AvatarProps[] = [
    { 
        id: 'calmtweet',
        name: 'Colm Tuite',
        image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        delayMs: 600,
        fallback: 'CT',
        description: 'loves tweeting early in themorn on the throne'
    }, 
    {
        id: 'pedrodudearte',
        name: 'Pedro Duarte',
        image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
        delayMs: 600,
        fallback: 'JD',
        description:  'the original dudearte'
    },
    {
        id: 'pedrotresarte',
        name: '',
        image: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
        delayMs: 600,
        fallback: 'PD',
        description: 'the second ones hipster brother'
    }
]


const User = ({  }) => {

    return (
        <Select label={'Menu'} items={items}> 
            {(item) => (
                <Item textValue={item.name || item.id || item.fallback || 'Anonymous'}>
                    <Avatar src={item.image} alt={item.id || item.fallback} />  

                    <div>
                        <Label> {item.name} </Label>
                        <Description> {item.description} </Description>
                    </div>
                </Item>
            )}
        </Select>
    )
}