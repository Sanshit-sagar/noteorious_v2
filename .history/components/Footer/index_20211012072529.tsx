import React from 'react'

import { styled } from '../../stitches.config'

import { Text } from '../../compositions/Text'
import { Button } from '../../primitives/Button'
import { Separator } from '../../primitives/Separator'
import { DialogDemo } from '../../compositions/DialogDemo'

import { UserCredentials } from '../TipTap/interfaces'
import { Editor } from '@tiptap/react' 


export const StyledFooter = styled('div', {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0.25rem'
});

interface FooterProps { 
    status: string; 
    roomId: string; 
    userCount: number;
    wordCount: number; 
    setName: () => void; 
    editor: Editor | null;
    user: UserCredentials; 
};

type DOMPercentageUsed = { 
    percentage: number;
};

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

const UserSession = ({ status, userCount, roomId }: { status: string; userCount: number; roomId: string; }) => (
    <Text>
        {status === 'connected'
            ? `${userCount} user${userCount === 1 ? '' : 's'} online in ${roomId}`
            : 'offline'}
    </Text> 
); 

const UserAccount = ({ user, setName }: { user: UserCredentials; setName: () => void; }) => (
    <Button onClick={setName}>  
        {user?.name}
    </Button>  
);

const WordCount = ({ wordCount }: { wordCount: number }) => <Text> {wordCount} words </Text> 

export const Footer = ({ editor, user, userCount, wordCount, status, setName, roomId }: FooterProps) => (
    <>
        <FooterTopBorder /> 
        <StyledFooter>  { editor && (<>
            <CharacterCount percentage={(editor?.getCharacterCount() ?? 0)/100} />
            <WordCount wordCount={wordCount} /> 
            <UserAccount user={user} setName={setName} /> 
        </> )} 
        <DialogDemo /> 
        </StyledFooter>
    </>
);

{/* <CharacterPercentage percentage={(editor?.getCharacterCount() ?? 0)/100} /> */}
{/* <UserSession status={status} userCount={userCount} roomId={roomId} /> */}
