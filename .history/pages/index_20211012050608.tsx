import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'

import Link from 'next/link'
import Head from 'next/head'

import { atomWithStorage } from 'jotai/utils'
export const darkModeAtom = atomWithStorage('darkMode', true)

const GetStarted = () => (
    <h1 style={{ textDecoration: 'underline', textDecorationColor: 'blue' }}>
        <Link href={'/home'}> 
            get started 
        </Link>
    </h1>
)


const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title> hOcus pOcus </title> 

                <meta 
                    name="description" 
                    content="Generated by create next app" 
                />
                <link 
                    rel="icon" 
                    href="/favicon.ico" 
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to hOcus pOcus, <GetStarted /> 
                </h1>
            </main>

        </div>
    )
}

export default Home