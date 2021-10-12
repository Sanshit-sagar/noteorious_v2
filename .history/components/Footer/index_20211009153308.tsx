import { styled } from '../../stitches.config'

import { Editor } from '@tiptap/react' 
import { Text } from '../../compositions/Text'
import { AvatarProps } from '../../compositions/Avatar/interfaces'
import React from 'react'
import { Separator } from '../../compositions/Separator'

export const FooterTopBorder = () => (
    <Separator orientation={'horizontal'} />
);


export const StyledFooter = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
})


type SelectItem = AvatarProps & { description?: string; }

interface FooterProps {
    editor: Editor | null;
}

const NO_INPUT = 'NO INPUT'
const getChars = (editor: Editor | null) => {
    return `${editor?.getCharacterCount() ?? undefined}`
}

const CharacterCount = ({ editor }: { editor: Editor | null }) => {
    let charCount = getChars(editor)
    return (
        <Text> {charCount ? `${charCount} characters` : NO_INPUT} </Text>
    );
}

export const Footer = ({ editor }: FooterProps) => (
    <>
        <FooterTopBorder /> 
        <StyledFooter> 
            <CharacterCount editor={editor} />
        </StyledFooter> 
    </>
);

