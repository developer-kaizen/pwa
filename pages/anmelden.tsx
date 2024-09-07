import { GetStaticProps } from 'next';

import { NavigationItem, Page } from '@ncb/types/index';
import { fetchCreateMainNavigation } from '@ncb/modules/MainNavigation/helper';
import { fetchCreateFooterNavigation } from '@ncb/modules/FooterNavigation/helper';
import Layout from '@ncb/components/Layout';
import { Button } from '@ncb/modules/Cards/styles';
import generateRegistrationPdf from '@ncb/lib/generateRegistrationPdf';

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
                <Button onClick={handleClick}>Anmelden</Button>
            </Layout>
        </>
    );
};

function handleClick() {
    generateRegistrationPdf();
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            mainNavigation: await fetchCreateMainNavigation(),
            footerNavigation: await fetchCreateFooterNavigation(),
        },
    };
};

export default DynamicPage;
