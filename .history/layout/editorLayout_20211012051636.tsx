
import React from 'react'

import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../../components/DarkMode'

import { AppBar } from '../compositions/

const EditorLayout = () => {


    return (
        <AppBar
            leftSlot={<> </>}
            rightSlot={
                <>
                    <Swatch />
                    <DarkMode />
                </>
            } 
        /> 
    );
}