import React, { useState } from 'react'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import CharacterCount from '@tiptap/extension-character-count'

import { MenuBar } from '../Header'
import { Separator } from '../../compositions/Separator'
import { 
    StyledEditor, 
    StyledContent, 
    StyledContainer 
} from './styled'


const MenuBarDivider = () =>  <Separator orientation={'horizontal'} />

const Footer = ({ editor }: { editor: Editor | null }) => {
    return (
        <p style={{ fontSize: '0.65em' }}> 
            {editor.getCharacterCount()} characters
        </p> 
    )
}

const Tiptap = () => {
    const [currentUser, setCurrentUser] = useState(getInitialUser)
    const [status, setStatus] = useState('connecting')
    const [users, setUsers] = useState([])

    if(!editor) return null; 
    
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

    return (
        <StyledContainer>
            <StyledEditor>
                <MenuBar editor={editor} /> 
                <MenuBarDivider /> 
                <StyledContent>
                    <EditorContent editor={editor} />
                </StyledContent>
                <Footer editor={editor} /> 
            </StyledEditor>
        </StyledContainer>
    );
}

export default Tiptap