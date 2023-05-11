import { AppStateProvider } from '@/lib/context.js'; 
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
	    <AppStateProvider>
	        <Component {...pageProps} />
        </AppStateProvider>
    );
}
