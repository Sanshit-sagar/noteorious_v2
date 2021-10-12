import React from 'react'
import TipTap from '../components/TipTap'
import { Flex } from '../compositions/Flex'

const Home = () => {

    return (
        <Flex css={{ bc: '$canvas' }}>
            <TipTap />
        </Flex>
    )
}

export default Home 