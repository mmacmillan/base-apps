import Head from 'next/head';
import css from '@/styles/layout.module.css';

import { useAppState } from '../lib/context.js';

function Layout({ title, children }) {

    return (
        <main className={ css.layout }>

            { children }

        </main>
    );
}

export default Layout;
