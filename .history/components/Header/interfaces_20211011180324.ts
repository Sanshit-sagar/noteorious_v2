import type { Editor } from '@tiptap/react'

type RetBool = () => boolean;
type RetVoid = () => void;
type ActionsReturningBoolOrVoid = RetBool | RetVoid; 

export interface IMenuBarItem { 
    icon: React.ReactNode | Element; 
    title: string;
    action: ActionsReturningBoolOrVoid; 
    isActive: () => boolean; 
    isDisabled?: () => boolean; 
    height?: string;
    width?: string;
    color?: string; 
    wrapSvg?: boolean; 
};

export interface MenuBarProps { 
    editor: Editor | null;
};
                    