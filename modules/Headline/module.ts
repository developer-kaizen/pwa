import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Headline from './Headline';

const Module: ContentfulModule = {
    typename: 'ModuleHeadline',
    component: Headline,
    query: gql`
        query moduleHeadline($id: String!) {
            moduleHeadline(id: $id) {
                title
            }
        }
    `,
};

export default Module;
