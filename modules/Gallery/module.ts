import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Gallery from './Gallery';

const Module: ContentfulModule = {
    typename: 'ModuleGallery',
    component: Gallery,
    query: gql`
        query moduleGallery($id: String!) {
            moduleGallery(id: $id) {
                title
                imagesCollection {
                    items {
                        sys {
                            id
                        }
                        url
                        width
                        height
                        title
                    }
                }
            }
        }
    `,
};

export default Module;
