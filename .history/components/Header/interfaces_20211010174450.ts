import type { Editor } from '@tiptap/react'

export interface MenuBarDividerProps {
    type: 'divider';
    icon?: undefined;
    title?: 'divider' | undefined;
    action?: () => void; 
    isDisabled?: false | undefined;
    isActive?: undefined; 
    component: JSX.Element; 
};

export interface MenuBarSelectorProps {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title?: string | undefined;
    isDisabled?: boolean; 
    component: JSX.Element;
};

export interface MenuBarButtonProps {
    type: 'item' | undefined; 
    icon: React.ReactNode | undefined;
    title: string;
    action: () => void;
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
                    