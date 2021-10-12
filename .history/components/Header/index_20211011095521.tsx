import React, { Fragment, useState } from 'react' 
import { styled } from '../../stitches.config'

import { MenuBarProps, IMenuBarItem } from './interfaces'
import { MenuBarItem } from './MenuBarItem'
import { MenuBarDivider } from './Divider'

import { HeadingSelector } from './Selector'
import { ComboBoxMenu } from './Menu'

import {
    BoldIcon, 
    ItalicIcon, 
    StrikeIcon, 
    ParagraphIcon, 
    UnOrderedListIcon,
    OrderedListIcon,
    MarkPenIcon,
    CodeIcon,
    TerminalIcon,
    TaskItemIcon,
    DoubleQuoteRIcon,
    SeparatorIcon,
    TextWrapIcon,
    EraserIcon,
    UndoIcon,
    RedoIcon
} from '../Icons'

export const StyledHeader = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
})


export const MenuBar = ({ editor }: MenuBarProps) => {
    const [username, setUsername] = useState<string>('') 

    // TODO: return progress bar here 
    if(!editor) return null

    const items: IMenuBarItem[] = editor ? [
        {
            type: 'button',
            icon: <BoldIcon />,
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
        },
        {
            type: 'button',
            icon: <ItalicIcon />,
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
        },
        {
            type: 'button',
            icon: <StrikeIcon />,
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
        },  
        {
            type: 'button',
            icon: <CodeIcon />,
            title: 'Code',
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive('code'),
        },
        {
            type: 'button',
            icon: <MarkPenIcon />,
            title: 'Highlight',
            action: () => editor.chain().focus().toggleHighlight().run(),
            isActive: () => editor.isActive('highlight'),
        },
        {
            type: 'selector',
            title: 'HeadingStyles',
            component: <HeadingSelector />,
        },
        {
            type: 'selector',
            title: 'Alignment',
            component: <TypeSelector />,
        },
        {
            type: 'button',
            icon: <ParagraphIcon />,
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph'),
        },
        { 
            type: 'button',  
            icon: <UnOrderedListIcon />,
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList'),
        },
        {
            type: 'button',
            icon: <OrderedListIcon />,
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList'),
        },
        {
            type: 'button',
            icon: <TaskItemIcon />,
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList'),
        },
        {
            type: 'button',
            icon: <TerminalIcon />,
            title: 'Synatax Highlighter', 
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive('codeBlock')
        }, 
        {
            type: 'button',
            icon: <DoubleQuoteRIcon />,
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote'),
        },
        {
            type: 'button',
            icon: <SeparatorIcon />,
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
            type: 'button',
            icon: <TextWrapIcon />,
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
            type: 'button',
            icon: <EraserIcon />,
            title: 'Clear Format',
            action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        {
            type: 'button',
            icon: <UndoIcon />,
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            isDisabled: () => editor.can().undo()
        },
        {
            type: 'button',
            icon: <RedoIcon />,
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            isDisabled: () => editor.can().redo(),
        },
    ] : []

    return (
        <StyledHeader>
            {/* <Picker />  */}
            <TypeSelector /> 
            {items.map((item: IMenuBarItem, index: number) => (
                <Fragment key={index}>
                    {   
                            (!item?.type?.length || item?.type === 'item')  ?   <MenuBarItem {...item} />
                        :   (item?.type === 'selector')  ?   <HeadingSelector {...item} />
                        :   (item?.type === 'divider') ?   <MenuBarDivider />  
                        :   null
                    }
                </Fragment>
            ))}
        </StyledHeader> 
    )
}