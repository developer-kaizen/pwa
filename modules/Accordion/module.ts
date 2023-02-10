import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Accordion from './Accordion';

const Module: ContentfulModule = {
    typename: 'ModuleAccordion',
    component: Accordion,
    query: gql`
        query moduleAccordion($id: String!) {
            moduleAccordion(id: $id) {
                headline
                subheadline
                itemsCollection {
                    items {
                        sys {
                            id
                        }
                        headline
                        text {
                            json
                        }
                    }
                }
            }
        }
    `,
};

export default Module;
