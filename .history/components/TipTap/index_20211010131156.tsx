import React, { useRef, useState, useEffect, useCallback } from 'react'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { Separator } from '../../compositions/Separator'
import { User, UserStatus, UserCredentials } from './interfaces'
import { Container, TipTapEditor, Content } from './styled'
import { CURRENT_USER, ROOMS, COLORS, NAMES } from './constants'


// import { SlashCommands } from '../SlashCommands'
// import { usePrevious } from '../../hooks/usePrevious'

import { useEditor, EditorContent, Editor, ReactRenderer } from '@tiptap/react'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import lowlight from 'lowlight'
// import tippy from 'tippy.js'
// import Suggestion from '@tiptap/suggestion'

interface IItem { 
    title: string; 
    itemProps: any[]; 
}

// interface CommandsListProps { 
//     items: IItem[]; 
//     component: Component; 
// }

// interface KeyDownHandlerProps {
//     event: KeyboardEvent;
// }

function InitialUserFactory() {
    return {
        name:  getRandomName(),
        color: getRandomColor()
    };
}

const getRandomElement = (list: any[]) => list[Math.floor(Math.random() * list.length)]
const getRandomRoom = () => getRandomElement(ROOMS)
const getRandomColor = () => getRandomElement(COLORS)
const getRandomName = () => getRandomElement(NAMES)
const room = getRandomRoom()

const getInitialUser = () => {
    let storedUser = localStorage.getItem(CURRENT_USER) 
    return storedUser ? JSON.parse(storedUser) : InitialUserFactory();
}                        

const CustomDocument = Document.extend({ content: 'heading block*' });

const Tiptap = () => {
    const [currentUser, setCurrentUser] = useState<UserCredentials>(undefined)
    const [status, setStatus] = useState<UserStatus>('connecting')
    const [users, setUsers] = useState<User[]>([])

    const editor = useEditor({
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'What’s the title?'
                    } 
                    return 'Can you add some further context?'
                },
            }),
            Highlight,
            TaskList,
            TaskItem,
            CharacterCount.configure({
                limit: 10000,
            }),
            Text,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            StarterKit.conf
            content: `
                <h1> </h1>
            `,
        ]
    });

    useEffect(() => {
        if (editor) {
            if(!currentUser) {
                let userWithCredentials = getInitialUser()
                setCurrentUser(userWithCredentials)
            } else {
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                // editor.chain().focus().user(currentUser).run()
            }
        }
    }, [editor, currentUser])

    const setName = useCallback(() => {
        const name = (window.prompt('Name') || '').trim().substring(0, 32)
        return (name) ? setCurrentUser({ ...currentUser, name }) : null; 
    }, [currentUser])
    
    return (
        <Container>
            <TipTapEditor>
                <MenuBar editor={editor} /> 
                <Separator orientation={'horizontal'} />
                <Content>
                    <EditorContent editor={editor} />
                </Content>
                <Footer 
                    user={currentUser}
                    userCount={users?.length ?? 0}
                    status={status}
                    editor={editor} 
                    roomId={room}
                    setName={setName}
                /> 
            </TipTapEditor>
        </Container>
    );
}

// SlashCommands.configure({
//     suggestion: {
//         items: (query: string) => {
//             return this.options.commands.filter((item: IItem) => {
//                     return item.title.toLowerCase().startsWith(query.toLowerCase())
//             }).slice(0, 10);
//         },
//         render: () => {
//             let component;
//             let popup;

//             return {
//                 onStart: (props) => {
//                     component = new ReactRenderer(CommandsListController, {
//                         editor: props.editor,
//                         props: { 
//                             ...props, 
//                             component: this.options.component 
//                         },
//                     });
      
//                     popup = tippy("body", {
//                         getReferenceClientRect: props.clientRect,
//                         appendTo: () => document.body,
//                         content: component.element,
//                         showOnCreate: true,
//                         interactive: true,
//                         trigger: "manual",
//                         placement: "bottom-start",
//                     });
//                 },
//                 onUpdate: (props) => {
//                     component.updateProps({
//                       ...props,
//                       component: this.options.component,
//                     });
      
//                     popup[0].setProps({
//                         getReferenceClientRect: props.clientRect,
//                     });
//                 },
//                 onKeyDown(props) {
//                     return component.ref?.onKeyDown(props);
//                 },
//                 onExit() {
//                     popup[0].destroy();
//                     component.destroy();
//                 },
//             }
//         },

// const Commands = Extension.create({
//     name: "mention",
  
//     defaultOptions: {
//       suggestion: {
//         char: "/",
//         startOfLine: true,
//         command: ({ editor, range, props }: { editor: Editor; range: ; props: any; }) => {
//           props.command({ editor, range });
//         },
//       },
//     },
  
//     addProseMirrorPlugins() {
//       return [
//         Suggestion({
//           editor: this.editor,
//           ...this.options.suggestion,
//         }),
//       ];
//     },
// });

// const isUpwards = (event: KeyboardEvent) => event.key === "ArrowUp"
// const isDownwards = (event: KeyboardEvent) => event.key === "ArrowDown"
// const isReturnKey = (event: KeyboardEvent) => event.key === 'Enter'
  

// const CommandsListController = ({ items, component: Component, command }: CommandsListProps) => {
//     const [selectedIndex, setSelectedIndex] = useState<number>(0) 
//     const prevItemsLength = usePrevious(items.length)

//     useEffect(() => {
//         if(items.length !== prevItemsLength) setSelectedIndex(0)
//     }, [selectedIndex, items?.length, prevItemsLength])
  
//     const onKeyDown = ({ event }: KeyDownHandlerProps) => {
//         const isUp = isUpwards(event)
//         const isDown = isDownwards(event)
//         const isEnter  = isReturnKey(event)
//         return isUp || isDown || isEnter
//     }
//     const upHandler = () => setSelectedIndex((selectedIndex + items.length - 1) % items.length)        
//     const downHandler = () => setSelectedIndex((selectedIndex + 1) % items.length)
//     const enterHandler = () => selectItem(selectedIndex)
//     const selectItem = (index: number) => (items[index]) ? command(items[index]) : null

//     return (
//         <Component
//             items={items}
//             selectedIndex={selectedIndex}
//             selectItem={selectItem}
//         />
//     )
// }

export default Tiptap