import type { Editor } from '@tiptap/react'

export interface MenuBarProps { 
    editor: Editor | null;
};

export interface IMenuBarDivider {
    type: 'divider';
    icon: undefined;
    title: 'divider' | undefined;
    isActive: undefined;
    isDisabled: undefined;
    component: undefined
}

export interface IMenuBarSelector {
    type: 'selector';
    icon: React.ReactNode | undefined;
    title?: string;
    isActive: () => void; 
    isDisabled?: boolean; 
    component: any | undefined;
}

export interface MenuBarButtonProps {
    type?: 'item' | undefined; 
    icon: JSX.Element | string;
    title: string;
    action: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    isDivider?: true; 
}

export type IMenuBarItem = MenuBarDividerProps | MenuBarSelectorProps | MenuBarButtonProps