const request = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') options.method = method;
    if (data) {
        options.headers = { 'content-type': 'application/json', };

        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'authorization': `Bearer ${token}`,
        }
    } else {
        const serializedAuth = localStorage.getItem('auth');
        if (serializedAuth) {
            const auth = JSON.parse(serializedAuth);

            if (auth.accessToken) {
                options.headers = {
                    ...options.headers,
                    'authorization': `Bearer ${token}`,
                };
            }
        }
    }

    const response = await fetch(url, options);

    const result = await response.json();

    if (result.message) throw result;

    return result;
};

export const requestFactory = (token) => {
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        delete: request.bind(null, 'DELETE', token),
    }
};
