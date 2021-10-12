import React, { useState, useEffect, useCallback } from 'react'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { Separator } from '../../compositions/Separator'
import { 
    StyledEditor, 
    StyledContent, 
    StyledContainer 
} from './styled'

import {
    CURRENT_USER,
    ROOMS,
    COLORS,
    NAMES
} from './constants'

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

const getInitialUser = () => {
    let storedCredentials = localStorage.getItem(CURRENT_USER)

    return storedCredentials 
        ? JSON.parse(storedCredentials)
        : InitialUserFactory()
}

type UserCredentials = { 
    name: string; 
    color?: string | undefined; 
} | undefined

const Tiptap = () => {
    const [currentUser, setCurrentUser] = useState<UserCredentials>(undefined)
    const [status, setStatus] = useState('connecting')
    // const [users, setUsers] = useState([])

    const editor = useEditor({
        extensions: [
            StarterKit.configure({

            }),
            Highlight,
            TaskList,
            TaskItem,
            CharacterCount.configure({
                limit: 10000,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                  if (node.type.name === 'heading') {
                    return 'What’s the title?'
                  }
        
                  return 'Can you add some further context?'
                },
            }),
        ],
    });
  

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
                <Footer editor={editor} /> 
            </StyledEditor>
        </StyledContainer>
    );
}

export default Tiptap