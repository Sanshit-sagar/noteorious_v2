import Head from 'next/head'
import React from 'react'
import { styled } from '../stitches.config'

import { Swatch } from '../components/Swatch'
import { DarkMode } from '../components/DarkMode'

import { AppBar } from '../compositions/AppBar'
import { Flex } from '../compositions/Flex'

interface IMetadata {
    title: string;
    description: string;
    cardImage?: string; 
}

export const AppContainer = styled(GlobalLayoutBase, {
    height: '100vh',
    width: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
    margin: '0',
    padding: '0',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    backgroundColor: '$canvas',
})


const AppHeader = () => (
    <AppBar
        leftSlot={<> </>}
        rightSlot={
            <Flex css={{ fd: 'row', jc: 'flex-end', ai: 'stretch', gap: '$2' }}>
                <Swatch />
                <DarkMode />
            </Flex>
        } 
    /> 
);

const EditorLayout = ({ metadata }: { metadata: IMetadata }) => {

    return (
        <>
            <Head>
                <title>{metadata.title}</title>

                <meta charSet="utf-8" />

                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                <meta name="robots" content="follow, index" />
                <link href="/favicon.ico" rel="shortcut icon" />

                <meta content={metadata.description} name="description" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:image" content={metadata.cardImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={metadata.cardImage} />
            </Head>

        
            <AppContainer className='container'>
                <AppHeader /> 


            </AppContainer>
        </>
    )
}