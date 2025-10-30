import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    let server_response = await fetch('http://localhost:8000/api/projects/' + params.slug + '');
    let json_response = await server_response.json();

    console.log(json_response);

    return {
        project: json_response
    }
};