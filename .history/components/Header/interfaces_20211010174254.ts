import type { Editor } from '@tiptap/react'

export interface MenuBarDividerProps {
    type: 'divider';
    icon: undefined;
    title: 'divider' | undefined;
    isDisabled: undefined;
    component: undefined
};

export interface MenuBarSelectorProps {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title?: string | undefined;
    isDisabled?: boolean; 
    component: JSX.Element;
};

export interface MenuBarButtonProps {
    type?: 'item' | undefined; 
    icon: React.ReactNode | undefined;
    title: string;
    action: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
};

export type IMenuBarItem = 
                    |   MenuBarDividerProps 
                    |   MenuBarSelectorProps 
                    |   MenuBarButtonProps; 


export interface MenuBarProps { 
    editor: Editor | null;
};
                    