import React, { useState, useEffect } from 'react'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import CharacterCount from '@tiptap/extension-character-count'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { Separator } from '../../compositions/Separator'
import { 
    StyledEditor, 
    StyledContent, 
    StyledContainer 
} from './styled'


const getRandomRoom = () => getRandomElement(rooms)
const getRandomColor = () => getRandomElement(colors)
const getRandomName = () => getRandomElement(names)

const getInitialUser = () => {
    return JSON.parse(localStorage.getItem('currentUser') || }  || {
      name: getRandomName(),
      color: getRandomColor(),
    }); 
}

const Tiptap = () => {
    const [currentUser, setCurrentUser] = useState(getInitialUser)
    const [status, setStatus] = useState('connecting')
    const [users, setUsers] = useState([])

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
        ],
    });

    useEffect(() => {
        if (editor && currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            editor.chain().focus().user(currentUser).run()
        }
    }, [editor, currentUser])


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