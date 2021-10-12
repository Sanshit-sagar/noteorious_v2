import { styled } from '../../stitches.config'
import { Editor } from '@tiptap/react' 

export const StyledFooter = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
})

const NO_INPUT = 'NO INPUT'
const getChars = (editor: Editor) => `${editor?.getCharacterCount()} characters` ?? NO_INPUT

interface FooterProps {
    editor: Editor | null;
}

const CharacterCount = ({ editor }: { editor: Editor }) => `${getChars} characters` ??  }
}

export const Footer = ({ editor }: FooterProps) => (
    <StyledFooter> 
        <CharacterCount editor={editor} />
    </StyledFooter> 
);

