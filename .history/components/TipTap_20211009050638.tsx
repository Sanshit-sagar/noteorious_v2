import React from 'react'
import { styled } from '../stitches.config'

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

const StyledEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid '
    borderRadius: 0.75rem,
    color: #0d0d0d;
    display: flex;
    flexDirection: column;
    maxHeight: 26rem;
})


const CustomDocument = Document.extend({
    content: 'taskList',
})
  
const CustomTaskItem = TaskItem.extend({
    content: 'inline*',
})

const Footer = ({ editor }: { editor: Editor }) => {
    return (
        <p style={{ fontSize: '1.25em' }}> 
            {editor.getCharacterCount()} characters
        </p> 
    )
}

import { MenuBar } from './MenuBar'

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
        content: `
            <h1> Hocus Pocus! 🌎️</h1>
            
            <p> fee fi fo fum, i detect a sore thumb </p>
            
            <code> cohd blochk </code>
        `,
    });

    return (
        <div 
            style={{ 
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '1em', padding: '1em' 
            }}
        >
            <MenuBar editor={editor} /> 
            <EditorContent editor={editor} />
            <Footer editor={editor} />
        </div>
    );
}

export default Tiptap


// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'