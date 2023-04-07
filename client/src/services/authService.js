import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/api/auth`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(baseUrl, data),
        logout: () => request.get(baseUrl),
    }
};
