import React from 'react'

import { Editor } from '@tiptap/react' 
import { styled } from '../../stitches.config'
import { Text } from '../../compositions/Text'
import { Separator } from '../../compositions/Separator'
import { AvatarProps } from '../../compositions/Avatar/interfaces'
import { UserCredentials } from '../TipTap'

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

interface FooterProps { 
    editor: Editor | null;
    user: UserCredentials; 
    handleUsername: (updatedName: string) => void;
}


type DOMPercentageUsed = { percentage: number }

const NO_INPUT = 'NO INPUT'


export const FooterTopBorder = () => <Separator orientation={'horizontal'} />


const CharacterCount = ({ percentage }: DOMPercentageUsed) => (
    <Text size='2'> 
        {percentage>0 ? `${percentage}%` : NO_INPUT} 
    </Text>
)

const CharacterPercentage = ({  percentage }: DOMPercentageUsed) => (
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
                fill="gray"
            />
            <circle
                r="5"
                cx="10"
                cy="10"
                fill='green'
                stroke='white'
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

const UserAccountInfo = ({ user, update }: UserCredentials) => (
    <Button
        onClick={update}

    > 

    </Button>  
);


export const Footer = ({ editor, user, setName }: FooterProps) => (
    <>
        <FooterTopBorder /> 
        <StyledFooter> 
           { editor && (
                <>
                    <CharacterCount percentage={(editor?.getCharacterCount() ?? 0)/100} />
                    <CharacterPercentage percentage={(editor?.getCharacterCount() ?? 0)/100} />
                </>
           )}
           <UserAccountInfo user={user} update={setName} /> 
        </StyledFooter> 
    </>
);
