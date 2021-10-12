import React, { Fragment, useState } from 'react' 
import { styled } from '../../stitches.config'

import { MenuBarProps, IMenuBarItem } from './interfaces'
import { MenuBarItem } from './MenuBarItem'
import { MenuBarDivider } from './Divider'

import { 
    BoldIcon, 
    ItalicIcon, 
    StrikeIcon, 
    UnderlineIcon, 
    LinkIcon,
    ParagraphIcon, 
    Heading1Icon,
    Heading2Icon,
    Heading3Icon,
    SubscriptIcon,
    SuperscriptIcon,
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
        {   icon: <Heading2Icon />,
            title: 'Heading2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <Heading3Icon />,
            title: 'Heading 3',
            action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: () => editor.isActive('heading', { level: 3 }),
        },
        { 
            icon: <SubscriptIcon />, 
            title: 'Subscript',
            action: () => editor.chain().focus().toggleSubscript().run(),
            isActive: () => editor.isActive('subscript'),
            isDisabled: () => editor.can().toggleSubscript(),
        },
        { 
            icon: <SuperscriptIcon />, 
            title: 'Superscript',
            action: () => editor.chain().focus().toggleSuperscript().run(),
            isActive: () => editor.isActive('superscript')
            isDisabled: () => editor.can().toggleSuperscript(),
        },
        {
            icon: <UnderlineIcon />,
            title: 'Underline',
            action: () => editor.chain().focus().toggleUnderline().run(),
            isActive: () => editor.isActive('underline'),
            isDisabled: () => editor.can().toggleUnderline(),
        },
        {
            icon: <ParagraphIcon />,
            title: 'Paragraph',
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive('paragraph'),
            isDisabled: () => editor.can().setParagraph(),
        },
        {   
            icon: <UnOrderedListIcon />,
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive('bulletList'),
            isDisabled: () => editor.can().toggleBulletList(),
        },
        {
            icon: <OrderedListIcon />,
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive('orderedList'),
            isDisabled: () => editor.can().toggleOrderedList(),
        },
        {
            icon: <TaskItemIcon />,
            title: 'Task List',
            action: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive('taskList'),
            isDisabled: () => editor.can().toggleTaskList(),
        },
        {
            icon: <TerminalIcon />,
            title: 'Synatax Highlighter', 
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive('codeBlock'),
            isDisabled: () => editor.can().toggleCodeBlock(),
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
            isDisabled: () => editor.can().redo(),
        },
    ] : []

    return (
        <StyledHeader>
            {/* <Picker />  */}
            {/* <HeadingSelector /> */}
            {items.map((item: IMenuBarItem, index: number) => (
                <Fragment key={index}>
                    {   
                            (!item?.type?.length || item?.type === 'item')  ?   <MenuBarItem {...item} />
                        :   (item?.type === 'divider') ?   <MenuBarDivider />  
                        :   null
                    }
                </Fragment>
            ))}
        </StyledHeader> 
    )
}