import type { Editor } from '@tiptap/react'

export interface Divider {
    type: 'divider';
    icon?: undefined;
    title?: 'divider' | undefined;
    action?: () => void; 
    isDisabled?: false | undefined;
    isActive?: undefined; 
    component: JSX.Element; 
};

export interface Select {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title?: string | undefined;
    isDisabled?: boolean; 
    component: JSX.Element;
};

export interface Button {
    type?: 'item' | undefined; 
    icon: React.ReactNode | undefined;
    title?: string;
    action?: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    component: JSX.Element;
};

export type IMenuBarItem = 
                    |   MenuBarDividerProps 
                    |   MenuBarSelectorProps 
                    |   MenuBarButtonProps; 


export interface MenuBarProps { 
    editor: Editor | null;
};
                    