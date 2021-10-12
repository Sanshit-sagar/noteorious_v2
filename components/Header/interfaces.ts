import type { Editor } from '@tiptap/react'

type RetBool = () => boolean;
type RetVoid = () => void;
type ActionsReturningBoolOrVoid = RetBool | RetVoid; 

export type ValidDimensionType = 
               | '12' | '16'| '18' | '24' | '32' | '36' 
               | '48' | '64' | '72' | '96' | '120' | '240'

export interface IMenuBarItem { 
    icon: React.ReactNode | Element; 
    title: string;
    action: ActionsReturningBoolOrVoid; 
    isActive: () => boolean; 
    isDisabled?: () => boolean; 
    height?: ValidDimensionType;
    width?: ValidDimensionType;
    color?: string; 
    wrapSvg?: boolean; 
};

export interface MenuBarProps { 
    editor: Editor | null;
};
                    