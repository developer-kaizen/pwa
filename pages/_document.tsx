import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// TODO: any

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) => {
                        //TODO: only collect styles from predefined modules
                        return sheet.collectStyles(<App {...props} />);
                    },
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='apple-touch-icon' href='/ios/192.png' />
                    <meta name='theme-color' content='#fff' />
                    <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
                    <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                    <meta name='format-detection' content='telephone=no' />
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-YPRDJGPB87`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-YPRDJGPB87', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
