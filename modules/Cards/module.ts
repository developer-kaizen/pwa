import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Cards from './Cards';

const Module: ContentfulModule = {
    typename: 'ModuleCards',
    component: Cards,
    query: gql`
        query moduleCards($id: String!) {
            moduleCards(id: $id) {
                title
                colsSmall
                colsMedium
                colsLarge
                cardsCollection {
                    items {
                        sys {
                            id
                        }
                        title
                        subtitle
                        text {
                            json
                        }
                        externalLink
                        internalLink {
                            slug
                        }
                        image {
                            url
                            width
                            height
                            title
                        }
                    }
                }
            }
        }
    `,
};

export default Module;
