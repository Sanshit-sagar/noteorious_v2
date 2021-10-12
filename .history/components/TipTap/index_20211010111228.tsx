import React, { useState, useEffect, useCallback } from 'react'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { SlashCommands } from '../SlashCommands'
import { Separator } from '../../compositions/Separator'
import { User, UserStatus, UserCredentials } from './interfaces'
import { Container, TipTapEditor, Content } from './styled'

import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import lowlight from 'lowlight'

import { useEditor, EditorContent } from '@tiptap/react'

import { CURRENT_USER, ROOMS, COLORS, NAMES } from './constants'

function InitialUserFactory() {
    return {
        name:  getRandomName(),
        color: getRandomColor()
    };
}

const getRandomElement = (list: any[]) => {
    return list[Math.floor(Math.random() * list.length)]
}

const getRandomRoom = () => getRandomElement(ROOMS)
const getRandomColor = () => getRandomElement(COLORS)
const getRandomName = () => getRandomElement(NAMES)
const room = getRandomRoom()

const getInitialUser = () => {
    let storedCredentials = localStorage.getItem(CURRENT_USER)

    return storedCredentials 
        ? JSON.parse(storedCredentials)
        : InitialUserFactory()
}

const CustomDocument = Document.extend({
    content: 'heading block*',
});


interface IItem { 
    title: string; 
    itemProps: any[]; 
}

interface CommandsListProps { 
    items: IItem[]; 
    command: (item: IItem) => void; 
}
type KbeProps = { event: KeyboardEvent } 

const isUpwards = (event: KeyboardEvent) => event.key === "ArrowUp"
const isDownwards = (event: KeyboardEvent) => event.key === "ArrowDown"
const isReturnKey = (event: KeyboardEvent) => event.key === 'Enter'

function CommandsList(props) {
    const { items, selectedIndex, selectItem } = props;
  
    return (
        <ul>
            {items.map(({ title }, idx: number) => (
                <li key={idx} onClick={() => selectItem(idx)}>
                    {title}
                </li>
            ))}
        </ul>
    );
}


const Tiptap = () => {
    const [currentUser, setCurrentUser] = useState<UserCredentials>(undefined)
    const [status, setStatus] = useState<UserStatus>('connecting')
    const [users, setUsers] = useState<User[]>([])

    const editor = useEditor({
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'What’s the title?'
                    } 
                    return 'Can you add some further context?'
                },
            }),
            Highlight,
            TaskList,
            TaskItem,
            CharacterCount.configure({
                limit: 10000,
            }),
            Text,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            StarterKit,
        ],
        content: `
            <h1> </h1>
        `
    })

    useEffect(() => {
        if (editor) {
            if(!currentUser) {
                let userWithCredentials = getInitialUser()
                setCurrentUser(userWithCredentials)
            } else {
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                // editor.chain().focus().user(currentUser).run()
            }
        }
    }, [editor, currentUser])

    const setName = useCallback(() => {
        const name = (window.prompt('Name') || '').trim().substring(0, 32)
        if(name) {
            return setCurrentUser({ ...currentUser, name })
        }
    }, [currentUser])
    
    return (
        <Container>
            <TipTapEditor>
                <MenuBar editor={editor} /> 
                <Separator orientation={'horizontal'} />
                <Content>
                    <EditorContent editor={editor} />
                </Content>
                <Footer 
                    user={currentUser}
                    userCount={users?.length ?? 0}
                    status={status}
                    editor={editor} 
                    roomId={room}
                    setName={setName}
                /> 
            </TipTapEditor>
        </Container>
    );
}

export default Tiptap