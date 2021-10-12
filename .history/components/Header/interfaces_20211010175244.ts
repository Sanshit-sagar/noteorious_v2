import type { Editor } from '@tiptap/react'

interface BaseMenuBarItem {
    type: 'divider' | 'selector' | 'item' | undefined; 
    icon?: React.ReactNode | undefined;
    title: string;
    action?: () => void | undefined | null; 
    isActive?: () => boolean | undefined | boolean; 
    isDisabled?: () => boolean | undefined | boolean; 
    component?: JSX.Element;
}

interface Divider extends BaseMenuBarItem {
    type: 'divider';
    icon?: undefined;
    title: 'divider';
    action?: () => void; 
    isDisabled?: undefined;
    isActive?: undefined; 
    component?: JSX.Element | undefined;
};

interface Select extends BaseMenuBarItem {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title: string;
    action?: undefined;
    isActive?: undefined; 
    isDisabled?: boolean | undefined; 
    component?: JSX.Element | undefined;
};

interface Button extends BaseMenuBarItem {
    type: 'item' | undefined; 
    icon?: React.ReactNode | undefined;
    title: string;
    action?: () => void;
    isActive?: () => boolean; 
    isDisabled?: () => boolean; 
    component?: JSX.Element | undefined;
};

export type IMenuBarItem = Button | Select | Divider

export interface MenuBarProps { 
    editor: Editor | null;
};
                    