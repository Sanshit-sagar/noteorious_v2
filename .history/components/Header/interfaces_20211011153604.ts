import type { Editor } from '@tiptap/react'

type RetBool = () => boolean;
type RetVoid = () => void;
type ActionsReturningBoolOrVoid = RetBool | () => void

export interface IMenuBarItem { 
    icon: React.ReactNode | Element; 
    title: string;
    action: ActionsReturningBoolOrVoid; 
    isActive: () => boolean; 
    isDisabled?: () => boolean; 
};

export interface MenuBarProps { 
    editor: Editor | null;
};
                    