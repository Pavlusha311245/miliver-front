import type {PageLoad} from './$types';

export const load: PageLoad = async ({}) => {
    let server_response = await fetch('http://localhost:8000/api/projects');
    let json_response = await server_response.json();

    return {
        projects: json_response['_embedded']['projects']
    }
};