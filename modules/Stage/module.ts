import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Stage from './Stage';

const Module: ContentfulModule = {
    typename: 'ModuleStage',
    component: Stage,
    query: gql`
        query moduleStage($id: String!) {
            moduleStage(id: $id) {
                title
                subtitle
                image {
                    url
                    width
                    height
                }
            }
        }
    `,
};

export default Module;
