import type { Editor } from '@tiptap/react'

type Divider {
    type: 'divider';
    icon?: undefined;
    title?: 'divider' | undefined;
    action?: () => void; 
    isDisabled?: false | undefined;
    isActive?: undefined; 
    component: JSX.Element; 
};

type Select {
    type: 'selector';
    icon?: React.ReactNode | undefined;
    title?: string | undefined;
    isDisabled?: boolean; 
    component: JSX.Element;
};

type Button {
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
                    