
import React from 'react'

import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../components/DarkMode'

import { AppBar } from '../compositions/AppBar'

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