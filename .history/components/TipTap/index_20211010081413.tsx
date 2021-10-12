import React, { useState, useEffect, useCallback } from 'react'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { Separator } from '../../compositions/Separator'
import { User, UserStatus, UserCredentials } from './interfaces'

import { CURRENT_USER, ROOMS, COLORS, NAMES } from './constants'

import { StyledEditor, StyledContent, StyledContainer } from './styled'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'

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
        ],
        content: `
            <h1> </h1>
            <subtitle> </subtitle>
            <p> </p> 
        `,
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
        <StyledContainer>
            <StyledEditor>
                <MenuBar editor={editor} /> 
                <Separator orientation={'horizontal'} />
                <StyledContent>
                    <EditorContent editor={editor} />
                </StyledContent>
                <Footer 
                    user={currentUser}
                    userCount={users?.length ?? 0}
                    status={status}
                    editor={editor} 
                    roomId={room}
                    setName={setName}
                /> 
            </StyledEditor>
        </StyledContainer>
    );
}

export default Tiptap