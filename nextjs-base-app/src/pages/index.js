import { useEffect } from 'react'
import { useAppState } from '@/lib/context.js';

//** nextJS components
import Head from 'next/head'
import Image from 'next/image'

//** import the font to use from the nextjs google font optimizer; it downloads the font during build so no network requests are sent
//** https://nextjs.org/docs/basic-features/font-optimization
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//** styles
import styles from '@/styles/Home.module.css'


export default function Home() {

    //** get a reference to the app state and the dispatch() function to update it
    const [appState, dispatch] = useAppState();

    const pageTitle = appState.title +' - Page One';

    //** this pattern is used to initialize a copmonent, it runs exactly once; a good place to fetch hydration data, etc
    useEffect(() => {

    }, []);

	return (
		<>
			<Head>
				<title>{ pageTitle }</title>
			</Head>

			<main className={styles.main}>
                <h1>Basic NextJS Template with Add-Ons</h1>
            </main>
		</>
	)
}
