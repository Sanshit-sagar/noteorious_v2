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

const CharacterCount = ({ percentage }: { percentage: number }) => (
    <Text size='2'> {percentage>0 ? `${charCount} characters` : NO_INPUT} </Text>
);

const CharacterPercentage = ({ percentage }: { percentage: number }) => (
    <div>
        <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
        >
            <circle
                r="10"
                cx="10"
                cy="10"
                fill="#e9ecef"
            />
            <circle
                r="5"
                cx="10"
                cy="10"
                fill='red'
                stroke='black'
                stroke-width="10"
                stroke-dasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
                transform={`rotate(-90) translate(-20)`}
            />
            <circle
                r="6"
                cx="10"
                cy="10"
                fill="green"
            />
        </svg>
    </div> 
);


export const Footer = ({ editor }: FooterProps) => (
    <>
        <FooterTopBorder /> 
        <StyledFooter> 
           { editor && (
                <>
                    <CharacterCount percentage={(editor?.getCharacterCount() ?? 0)/100} />
                    <CharacterPercentage percentage={(editor?.getCharacterCount() ?? 0)/100} />
                </>
           )}
        </StyledFooter> 
    </>
);
