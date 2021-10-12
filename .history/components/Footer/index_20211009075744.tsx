import { Editor } from '@tiptap/react' 

interface FooterProps {
    editor: Editor | null;
}

export const Footer = ({ editor }: FooterProps) => (
    <p style={{ fontSize: '0.65em' }}> 
        {`${editor?.getCharacterCount()} characters` ?? '---'}
    </p> 
);

