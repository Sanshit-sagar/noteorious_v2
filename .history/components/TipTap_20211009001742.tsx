import React from 'react'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
// import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'

import { MenuBar } from './MenuBar'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Highlight,
            TaskList,
            TaskItem,
        ],
        content: `
            <h1> Hocus Pocus! 🌎️</h1>
            
            <p> fee fi fo fum, i detect a sore thumb </p>
            
            <code> cohd blochk </code>
        `,
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <EditorContent editor={editor} />
    );
}

export default Tiptap


// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'