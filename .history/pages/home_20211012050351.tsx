import React from 'react'
import TipTap from '../components/TipTap'
import { Flex } from '../compositions/Flex'

import { atom, useAtom } from 'jotai' 

const Home = () => {

    return (
        <Flex css={{ height: '100vh', bc: '$canvas' }}>
            <TipTap />
        </Flex>
    )
}

export default Home 