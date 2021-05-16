import { useEffect } from 'react';
import { AppWrapper } from '../context/state';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return <AppWrapper><Component {...pageProps} /></AppWrapper>
}

export default MyApp;