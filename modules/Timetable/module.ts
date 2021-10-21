import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Timetable from './Timetable';

const Module: ContentfulModule = {
    typename: 'ModuleTimetable',
    component: Timetable,
    query: gql`
        query moduleTimetable($id: String!) {
            moduleTimetable(id: $id) {
                title
                daysCollection(limit: 7) {
                    items {
                        name
                        unitsCollection(limit: 100) {
                            items {
                                name
                                trainer
                                time
                            }
                        }
                    }
                }
            }
        }
    `,
};

export default Module;
