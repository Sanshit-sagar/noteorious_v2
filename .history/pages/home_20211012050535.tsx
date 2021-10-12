import React from 'react'
import TipTap from '../components/TipTap'
import { Flex } from '../compositions/Flex'

import { atomWithStorage } from 'jotai/utils'
export const darkModeAtom = atomWithStorage('darkMode', true)

const Home = () => (
        <Flex css={{ height: '100vh', bc: '$canvas' }}>
            <TipTap />
        </Flex>
)
export default Home 