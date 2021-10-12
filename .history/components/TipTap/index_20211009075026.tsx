import React from 'react'

import { useEditor, EditorContent, Editor } from '@tiptap/react'


import { MenuBar } from '../MenuBar'

import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

import { Separator } from '../../compositions/Separator'
import { 
    StyledEditor, 
    StyledContent, 
    StyledContainer 
} from './styled'


const MenuBarDivider = () =>  <Separator orientation={'horizontal'} />

const Footer = ({ editor }: { editor: Editor | null }) => {
    if(!editor) return null; 

    return (
        <p style={{ fontSize: '0.65em' }}> 
            {editor.getCharacterCount()} characters
        </p> 
    )
}

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({

            }),
            Highlight,
            TaskList,
            TaskItem,
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