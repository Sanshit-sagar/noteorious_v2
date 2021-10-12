
import React from 'react'
import { Swatch } from '../../components/Swatch'
import { DarkMode } from '../../components/DarkMode'

const EditorLayout = () => {


    return (
        <AppBar
            leftSlot={<> </>}
            rightSlot={
                <>
                    <Swatch />
            } 
    )
}