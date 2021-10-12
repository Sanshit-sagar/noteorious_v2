import React, { Fragment, useState } from 'react' 

import { MenuBarProps, IMenuBarItem } from './interfaces'
import { Separator } from '../../compositions/Divider/Separator'
import { MenuBarItem } from './MenuBarItem'
// let users: string[] = ['Sanshit Sagar']
// let room: number = '0'

const Divider = () => <Separator orientation={'horizontal'} /> 

export const MenuBar = ({ editor }: MenuBarProps) => {
    const [username, setUsername] = useState<string>('') 

    {{ editor.getCharacterCount() }}/{{ limit }} characters
    if(!editor) return null

    const items: IMenuBarItem[] = editor ? [
        {
            icon: 'bold',
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
        },
        {
            icon: 'italic',
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
        },
        {
            icon: 'strikethrough',
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
        },  
        {
            icon: 'code-view',
            title: 'Code',
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive('code'),
        },
        {
            icon: 'mark-pen-line',
            title: 'Highlight',
            action: () => editor.chain().focus().toggleHighlight().run(),
            isActive: () => editor.isActive('highlight'),
        },
        // {
        //     isDivider: true,
        // },
        {
            icon: 'h-1',
            title: 'Heading 1',
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive('heading', { level: 1 }),
        },  
        {
            icon: 'h-2',
            title: 'Heading 2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive('heading', { level: 2 }),
        },
        {
            icon: 'paragraph',
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph'),
        },
        {   
            icon: 'list-unordered',
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList'),
        },
        {
            icon: 'list-ordered',
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList'),
        },
        {
            icon: 'list-check-2',
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList'),
        },
        {
            icon: 'code-box-line',
            title: 'Code Block',
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive('codeBlock'),
        },
        // {
        //     type: 'divider',
        // },
        {
            icon: 'double-quotes-l',
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote'),
        },
        {
            icon: 'separator',
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        // {
        //     type: 'divider',
        // },
        {
            icon: 'text-wrap',
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
            icon: 'format-clear',
            title: 'Clear Format',
            action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        // {
        //     type: 'divider',
        // },
        {
            icon: 'arrow-go-back-line',
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            isDisabled: () => editor.can().undo()
        },
        {
            icon: 'arrow-go-forward-line',
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            isDisabled: () => editor.can().redo()
        },
    ] : []; 

    return (
        <div style={{ border: '2px solid black', padding: '1em', width:'100%', margin: '5px' }}>
            {items.map((item: IMenuBarItem, index: number) => (
                <Fragment key={index}>
                    {!item?.icon?.length && !item?.title?.length
                        ?   <Divider /> 
                        :   <MenuBarItem {...item} />}
                </Fragment>
            ))}
        </div> 
    )
}