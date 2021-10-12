import React from 'react'

import { useEditor, EditorContent, Editor } from '@tiptap/react'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
// import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'

import { 
    StyledEditor, 
    StyledContent, StyledContainer } from './styled'


const CustomDocument = Document.extend({
    content: 'taskList',
})
  
const CustomTaskItem = TaskItem.extend({
    content: 'inline*',
})

const Footer = ({ editor }: { editor: Editor | null }) => {
    if(!editor) return null; 

    return (
        <p style={{ fontSize: '1.25em' }}> 
            {editor.getCharacterCount()} characters
        </p> 
    )
}

import { MenuBar } from '../MenuBar'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({

            }),
            Highlight,
            TaskList,
            TaskItem,
            CustomTaskItem
        ],
    });

    return (
        <StyledContainer>
            <StyledEditor>
                <MenuBar editor={editor} /> 
            
                <StyledContent>
                    <EditorContent editor={editor} />
                </StyledContent>
            </StyledEditor>
        </StyledContainer>
    );
}

export default Tiptap


// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'