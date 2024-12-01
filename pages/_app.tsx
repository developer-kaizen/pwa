import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from '@ncb/components/Head';
import theme from '../theme';
import GlobalStyles from '../globalStyles';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Floating } from '@janmarkuslanger/floatingjs';

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const floating = new Floating({
            elements: ['❄️'],
            maxElements: 20,
            interval: 1000,
        });

        floating.updateRoot(document.querySelector('body') || document.body);
        floating.start();

        const handleRouteChange = (url: string) => {
            floating.updateRoot(document.querySelector('body') || document.body);
            floating.start();

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
