import React, { Fragment, useState } from 'react' 
import { styled } from '../../stitches.config'

import { MenuBarProps, IMenuBarItem } from './interfaces'
import { MenuBarItem as Button } from './MenuBarItem'
import { MenuBarDivider as Divider } from './Divider'
import { MenuBarSelect as Select } from './Selector'
import { AlignmentIcons }
import { 
    BoldIcon, 
    ItalicIcon, 
    StrikeIcon, 
    UnderlineIcon, 
    LinkIcon,
    UnlinkIcon,
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

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        if(url!==null) {
            if(url==='') {
                editor.chain().focus().extendMarkRange('link').unsetLink().run()
            } else {
                editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            }
        }
    }

    const items: IMenuBarItem[] = editor ? [
        {
            icon: <BoldIcon />,
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive('bold'),
            isDisabled: () => editor.can().toggleBold(),
        },
        {
            icon: <ItalicIcon />,
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive('italic'),
            isDisabled: () => editor.can().toggleItalic(),
        },
        {
            icon: <StrikeIcon />,
            title: 'Strike',
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive('strike'),
            isDisabled: () => editor.can().toggleStrike(),
        },  
        {
            icon: <CodeIcon />,
            title: 'Code',
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive('code'),
            isDisabled: () => editor.can().toggleCode(),
        },
        {
            icon: <MarkPenIcon />,
            title: 'Highlight',
            action: () => editor.chain().focus().toggleHighlight().run(),
            isActive: () => editor.isActive('highlight'),
            isDisabled: () => editor.can().toggleHighlight(),
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
            isActive: () => editor.isActive('superscript'),
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
            icon: <LinkIcon />,
            title: 'Link',
            action: () => setLink(),
            isActive: () => editor.isActive('link'),
            // isDisabled: () => editor.can().setLink(), /* TODO */ 
        },
        {
            icon: <UnlinkIcon />,
            title: 'Unlink',
            action: () => editor.chain().focus().unsetLink().run(),
            isActive: () => editor.isActive('link'),
            isDisabled: () => !editor.isActive('link')
        },
        {
            icon: <DoubleQuoteRIcon />,
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive('blockquote'),
            isDisabled: () => editor.can().toggleBlockquote(),
        },
        {
            icon: <SeparatorIcon />,
            title: 'Horizontal Rule',
            action: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: () => editor.isActive('blockquote'),
            isDisabled: () => editor.can().setHorizontalRule(),
        },
        {
            icon: <TextWrapIcon />,
            title: 'Hard Break',
            action: () => editor.chain().focus().setHardBreak().run(),
            isActive: () => editor.isActive('break'),
            isDisabled: () => editor.can().setHardBreak(),
        },
        {
            icon: <EraserIcon />,
            title: 'Clear Format',
            action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
            isActive: () => editor.isActive('clear'),
            isDisabled: () => editor.can().unsetAllMarks(),
        },
        {
            icon: <UndoIcon />,
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            isActive: () => editor.isActive('undo'),
            isDisabled: () => editor.can().undo()
        },
        {
            icon: <RedoIcon />,
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            isActive: () => editor.isActive('redo'),
            isDisabled: () => editor.can().redo(),
        },
    ] : []

    const headingItems = [
        {
            icon: <Heading1Icon />,
            title: 'Heading 1',
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive('heading', { level: 1 }),
            isDisabled: () => editor.can().toggleHeading({ level: 1 }),
        },
        {   icon: <Heading2Icon />,
            title: 'Heading2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive('heading', { level: 2 }),
            isDisabled: () => editor.can().toggleHeading({ level: 2 }),
        },
        {
            icon: <Heading3Icon />,
            title: 'Heading 3',
            action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: () => editor.isActive('heading', { level: 3 }),
            isDisabled: () => editor.can().toggleHeading({ level: 3 }),
        }
    ];

    return (
        <StyledHeader>
            <>{items.map((item: IMenuBarItem, index: number) => (
                <Fragment key={index}>
                    <Button {...item} />
                </Fragment>
            ))}</>
            <Select items={headingItems} />
            <AlignmentIcons /> 
            <Divider orientation={'vertical'} />
        </StyledHeader> 
    )
}