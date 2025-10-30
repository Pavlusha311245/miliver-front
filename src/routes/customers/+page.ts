import type {PageLoad} from './$types';

export const load: PageLoad = async ({}) => {
    let server_response = await fetch('http://localhost:8000/api/customers');
    let json_response = await server_response.json();

    return {
        customers: json_response['_embedded']['customers']
    }
};