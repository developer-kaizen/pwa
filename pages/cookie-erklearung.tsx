import { GetStaticProps } from 'next';
import Script from 'next/script';
import { NavigationItem, Page } from '@ncb/types/index';
import { fetchCreateMainNavigation } from '@ncb/modules/MainNavigation/helper';
import { fetchCreateFooterNavigation } from '@ncb/modules/FooterNavigation/helper';
import Layout from '@ncb/components/Layout';

const path = require('path');

type PageProps = {
    pageData: Page;
    mainNavigation: NavigationItem[];
    footerNavigation: NavigationItem[];
};

const DynamicPage = ({ pageData, mainNavigation, footerNavigation }: PageProps) => {
    return (
        <>
            <Layout mainNavigation={mainNavigation} footerNavigation={footerNavigation}>
                <Script
                    id='CookieDeclaration'
                    src='https://consent.cookiebot.com/da74850a-e4bc-4ad2-9432-273b090008d7/cd.js'
                    type='text/javascript'
                    async
                ></Script>
                <style global jsx>{`
                    .CookieDeclaration {
                        max-width: 500px;
                        margin: 0 auto;
                        width: 100%;
                    }
                `}</style>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            mainNavigation: await fetchCreateMainNavigation(),
            footerNavigation: await fetchCreateFooterNavigation(),
        },
    };
};

export default DynamicPage;
