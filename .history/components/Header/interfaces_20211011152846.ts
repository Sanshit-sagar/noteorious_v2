import type { Editor } from '@tiptap/react'


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


export interface IMenuBarItem { 
    icon: React.ReactNode | Element; 
    title: string;
    action: () => boolean; 
    isActive: () => boolean; 
    isDisabled?: () => boolean; 
};

export interface MenuBarProps { 
    editor: Editor | null;
};
                    