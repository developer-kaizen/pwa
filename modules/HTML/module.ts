import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import HTML from './HTML';

const Module: ContentfulModule = {
    typename: 'ModuleHtml',
    component: HTML,
    query: gql`
        query moduleHtml($id: String!) {
            moduleHtml(id: $id) {
                title
                html
            }
        }
    `,
};

export default Module;
