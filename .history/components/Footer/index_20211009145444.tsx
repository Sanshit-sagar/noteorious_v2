import { styled } from '../../stitches.config'

import { Editor } from '@tiptap/react' 
import { Text } from '../../compositions/Text'
import { AvatarProps } from '../../compositions/Avatar/interfaces'
import React from 'react'

export const StyledFooter = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
})


type SelectItem = AvatarProps & { description?: string; }

let users: SelectItem[] = [
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



interface FooterProps {
    editor: Editor | null;
}

const NO_INPUT = 'NO INPUT'
const getChars = (editor: Editor | null) => {`${editor?.getCharacterCount() ?? undefined}`}

const CharacterCount = ({ editor }: { editor: Editor | null }) => {
    let charCount = getChars(editor)
    return charCount ? `${charCount} characters`
}`</Text>;


export const Footer = ({ editor }: FooterProps) => (
    <StyledFooter> 
        <CharacterCount editor={editor} />
        <Users users={users} />
    </StyledFooter> 
);

