import type { Editor } from '@tiptap/react'

export interface MenuBarProps { 
    editor: Editor | null;
};

export interface IMenuBarItem {
    icon: string;
    title: string;
    action: () => void;
    isActive?: () => boolean; 
    isDivider?: true; 
}