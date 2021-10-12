import React, { Fragment, useState } from 'react' 
import { styled } from '../../stitches.config'

import { MenuBarProps, IMenuBarItem } from './interfaces'
import { MenuBarItem } from './MenuBarItem'
import { Divider } from './Divider'

import { 
    BoldIcon, 
    ItalicIcon, 
    StrikeIcon, 
    Heading1Icon, 
    Heading2Icon, 
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
});

export const MenuBar = ({ editor }: MenuBarProps) => {
    const [username, setUsername] = useState<string>('') 

    // TODO: return progress bar here 
    if(!editor) return null

    const items: IMenuBarItem[] = editor ? [
        {
            icon: <BoldIcon />,
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
        },
        {
            icon: <ItalicIcon />,
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
        },
        {
            icon: <StrikeIcon />,
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
        },  
        {
            icon: <CodeIcon />,
            title: 'Code',
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive('code'),
        },
        {
            icon: <MarkPenIcon />,
            title: 'Highlight',
            action: () => editor.chain().focus().toggleHighlight().run(),
            isActive: () => editor.isActive('highlight'),
        },
        {
            icon: <Heading1Icon />,
            title: 'Heading 1',
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive('heading', { level: 1 }),
        },  
        {
            icon: <Heading2Icon />,
            title: 'Heading 2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <ParagraphIcon />,
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph'),
        },
        {   
            icon: <UnOrderedListIcon />,
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList'),
        },
        {
            icon: <OrderedListIcon />,
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList'),
        },
        {
            icon: <TaskItemIcon />,
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList'),
        },
        {
            icon: <TerminalIcon />,
            title: 'Code Block',
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive('codeBlock'),
        },
        {
            icon: <DoubleQuoteRIcon />,
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote'),
        },
        {
            icon: <SeparatorIcon />,
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
            icon: <TextWrapIcon />,
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run(),
        },
        {
            icon: <EraserIcon />,
            title: 'Clear Format',
            action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
        },
        {
            icon: <UndoIcon />,
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            isDisabled: () => editor.can().undo()
        },
        {
            icon: <RedoIcon />,
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            isDisabled: () => editor.can().redo()
        },
    ] : []; 

    return (
        <StyledHeader>
            {items.map((item: IMenuBarItem, index: number) => (
                <Fragment key={index}>
                    {item?.title === 'divider'
                        ?   <Divider /> 
                        :   <MenuBarItem {...item} />}
                </Fragment>
            ))}
        </StyledHeader> 
    )
}