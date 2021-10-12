import type { Editor } from '@tiptap/react'

export interface IMenuBarItem { 
    icon: React.ReactNode | Element; 
    title: string;
    action: ; 
    isActive: () => boolean; 
    isDisabled?: () => boolean; 
};

export interface MenuBarProps { 
    editor: Editor | null;
};
                    