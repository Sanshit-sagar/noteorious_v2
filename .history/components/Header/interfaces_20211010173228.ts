import type { Editor } from '@tiptap/react'

export interface MenuBarProps { 
    editor: Editor | null;
};

export interface IMenuBarDividerItem {
    type: 'divider';
    icon: undefined;
    title: 'divider' | undefined;
    
}

export interface IMenuBarSelector {
    type?: 'selector';
    icon: React.ReactNode;
    title?: string;
    isActive: () => void; 
    isDisabled?: boolean; 
    component: any;
}

export interface IMenuBarItem {
    type?: 'item' | undefined; 
    icon: JSX.Element | string;
    title: string;
    action: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    isDivider?: true; 
}

export type IMenuBarItem = 