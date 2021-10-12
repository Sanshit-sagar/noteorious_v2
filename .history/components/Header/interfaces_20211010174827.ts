import type { Editor } from '@tiptap/react'

interface BaseMenuBarItem {
    type: 'item' | undefined; 
    action?: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    component: JSX.Element;
} && Pick<icon?: undefined | 

interface Divider extends BaseMenuBarItem {
    type: 'divider';
    icon?: undefined;
    title?: 'divider' | undefined;
    action?: () => void; 
    isDisabled?: false | undefined;
    isActive?: undefined; 
    component: JSX.Element; 
};

interface Select extends BaseMenuBarItem {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title?: string | undefined;
    isDisabled?: boolean; 
    component: JSX.Element;
};

interface Button extends BaseMenuBarItem {
    type?: 'item' | undefined; 
    icon: React.ReactNode | undefined;
    title?: string;
    action?: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    component: JSX.Element;
};

export type IMenuBarItem = Button | Select | Divider


export interface MenuBarProps { 
    editor: Editor | null;
};
                    