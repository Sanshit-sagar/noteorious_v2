import type { Editor } from '@tiptap/react'

interface BaseMenuBarItem {
    type: 'divider' | 'selector' | 'item' | undefined; 
    icon?: React.ReactNode | undefined;
    title: string;
    action: () => void; 
    isActive: () => boolean; 
    isDisabled: () => boolean; 
    component?: JSX.Element;
}

// interface Divider extends BaseMenuBarItem {
//     type: 'divider';
//     icon?: undefined;
//     title: 'divider';
//     action: () => void; 
//     isActive: () => boolean; 
//     isDisabled: () => boolean; 
//     component?: JSX.Element | undefined;
// };

// interface Select extends BaseMenuBarItem {
//     type: 'selector';
//     icon?: React.ReactNode | undefined;
//     title: string;
//     action: () => void; 
//     isActive: () => boolean; 
//     isDisabled: () => boolean; 
//     component?: JSX.Element | undefined;
// // };
// ({ icon: Element; title: string; action: () => boolean; isActive: () => boolean; isDisabled: () => boolean; } | 
export interface IncompleteItem { 
    icon: Element; 
    title: string; 
    action: () => void; 
    isActive: () => boolean; 
};

export interface IMenuBarItem extends BaseMenuBarItem { 
    icon: React.ReactNode;
    title: string;
    action: () => boolean; 
    isActive: () => boolean; 
    isDisabled: () => boolean; 
};

export type IMenuBarItem = Button | Select | Divider

export interface MenuBarProps { 
    editor: Editor | null;
};
                    