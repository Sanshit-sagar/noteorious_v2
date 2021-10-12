import React, { useState, useEffect, useCallback } from 'react'

import { Footer } from '../Footer'
import { MenuBar } from '../Header'
import { SlashCommands } from '../SlashCommands'
import { Separator } from '../../compositions/Separator'
import { User, UserStatus, UserCredentials } from './interfaces'
import { Container, TipTapEditor, Content } from './styled'
import { CURRENT_USER, ROOMS, COLORS, NAMES } from './constants'

import { useEditor, EditorContent, ReactRenderer } from '@tiptap/react'
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
import tippy from 'tippy.js'
import Suggestion from '@tiptap/suggestion'

interface IItem { 
    title: string; 
    itemProps: any[]; 
}

interface CommandsListProps { 
    items: IItem[]; 
    command: (item: IItem) => void; 
}

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
            StarterKit,
            SlashCommands.configure({
                suggestion: {
                    items: (query: string) => {
                        return this.options.commands.filter((item: IItem) => {
                                return item.title.toLowerCase().startsWith(query.toLowerCase())
                        }).slice(0, 10);
                    },
                    render: () => {
                        let component = ReactRenderer
                        let popup: { destroy: () => void }[];

                        return {
                            onStart(props) { 
                                component = new ReactRenderer(CommandsList, {
                                    editor: props.editor,
                                    props: props,
                                });

                                popup = tippy("body", {
                                    getReferenceClientRect: props.clientRect,
                                    appendTo: () => document.body,
                                    content: component.element,
                                    showOnCreate: true,
                                    interactive: true,
                                    trigger: "manual",
                                    placement: "bottom-start",
                                });
                            },
                            onUpdate(props: { clientRect: any }) {
                                component.updateProps(props);
                
                                popup[0].setProps({
                                    getReferenceClientRect: props.clientRect,
                                });
                            },
                            onKeyDown(props) {
                                return component.ref?.onKeyDown(props);
                            },
                            onExit() {
                                popup[0].destroy();
                                component.destroy();
                            },
                        }
                    },
                    content: `
                        <h1> </h1>
                    `
                }
            })
        ]
    })


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

const Commands = Extension.create({
    name: "mention",
  
    defaultOptions: {
      suggestion: {
        char: "/",
        startOfLine: true,
        command: ({ editor, range, props }: { editor: Editor; range: ; props: any; }) => {
          props.command({ editor, range });
        },
      },
    },
  
    addProseMirrorPlugins() {
      return [
        Suggestion({
          editor: this.editor,
          ...this.options.suggestion,
        }),
      ];
    },
});

class CommandsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedIndex: 0,
      };
    }
  
    onKeyDown({ event }: { event: string; }) {
      if (event.key === "ArrowUp") {
        this.upHandler();
        return true;
      }
  
      if (event.key === "ArrowDown") {
        this.downHandler();
        return true;
      }
  
      if (event.key === "Enter") {
        this.enterHandler();
        return true;
      }
  
      return false;
    }
  
    upHandler() {
      this.setState({
        selectedIndex:
          (this.state.selectedIndex + this.props.items.length - 1) %
          this.props.items.length,
      });
    }
  
    downHandler() {
      this.setState({
        selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
      });
    }
  
    enterHandler() {
      this.selectItem(this.state.selectedIndex);
    }
  
    selectItem(index) {
      const item = this.props.items[index];
  
      if (item) {
        this.props.command(item);
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.items.length !== this.props.items.length) {
        this.setState({ selectedIndex: 0 });
      }
    }
  
    render() {
      const { items } = this.props;
      const { selectedIndex } = this.state;
  
      return (
        <ul>
          {items.map(({ title }, idx) => (
            <li
              key={idx}
              onClick={() => selectItem(idx)}
              className={selectedIndex === idx ? "active" : ""}
            >
              {title}
            </li>
          ))}
        </ul>
      );
    }
  }

export default Tiptap