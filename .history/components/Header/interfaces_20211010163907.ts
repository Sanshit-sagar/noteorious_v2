import type { Editor } from '@tiptap/react'

export interface MenuBarProps { 
    editor: Editor | null;
};

export interface IMenuBarSelector {
    type?: 'selector';
    icon: React.ReactNode;
    title?: string;
    
}

export interface IMenuBarItem {
    type?: 'divider' | 'item' | 'selector' | undefined; 
    icon: JSX.Element | string;
    title: string;
    action: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    isDivider?: true; 
    component: 
}
