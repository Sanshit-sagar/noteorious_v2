
import React from 'react'

import { AppBar } from '../../compositions/AppBar'
import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../../components/DarkMode'

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