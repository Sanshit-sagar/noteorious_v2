import React from 'react'
import TipTap from '../components/TipTap'

import EditorLayout from '../layout/editorLayout'

const pageMetadata = {
    title: 'TipTap HocusPocus',
    
}

const Home = () => (
    <EditorLayout metadata={pageMetadata}>
        <TipTap />
    </EditorLayout>
)

export default Home 