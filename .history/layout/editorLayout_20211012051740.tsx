
import React from 'react'

import { Swatch } from '../components/Swatch'
import { DarkMode } from '../components/DarkMode'

import { AppBar } from '../compositions/AppBar'
import { Flex } from '../primitives/Flex'

export const EditorLayout = () => {


    return (
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
}