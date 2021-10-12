import { styled } from '../../stitches.config'
import { Editor } from '@tiptap/react' 

export const StyledHeader = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
});


interface FooterProps {
    editor: Editor | null;
}

export const Footer = ({ editor }: FooterProps) => (
    <p style={{ fontSize: '0.65em' }}> 
        {`${editor?.getCharacterCount()} characters` ?? '---'}
    </p> 
);

