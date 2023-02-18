import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from '@ncb/components/Head';
import theme from '../theme';
import GlobalStyles from '../globalStyles';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (!('gtag' in window)) {
                return;
            }

            window.gtag('config', 'G-YPRDJGPB87', {
                page_path: url,
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ParallaxProvider>
                    <Component {...pageProps} />
                </ParallaxProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
