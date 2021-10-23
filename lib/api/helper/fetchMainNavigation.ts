import { createClient } from '..';
import { MAIN_NAVIGATION } from '../queries';

const fetchMainNavigation = async () => {
    let data: any = []; // TODO: Remove any!
    const client = createClient();

    try {
        data = await client.query({
            query: MAIN_NAVIGATION,
        });
    } catch (error) {
        console.error(JSON.stringify(error, null, 2));
        return false;
    }

    return data?.data?.pageCollection?.items;
};

export default fetchMainNavigation;
