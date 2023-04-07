import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/api/users`;

export const userServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        getAll: () => request.get(baseUrl),
        getOne: (userId) => request.get(`${baseUrl}/${userId}`),
        register: (data) => request.post(baseUrl, data),
        update: (userId, data) => request.put(`${baseUrl}/${userId}`, data),
        changePass: (userId, data) => request.post(`${baseUrl}/${userId}/password`, data),
        updateRole: (userId, data) => request.patch(`${baseUrl}/${userId}`, data),
        deleteUser: (userId) => request.delete(`${baseUrl}/${userId}`),
        
        getAvatar: (userId, avatarId) => request.get(`${baseUrl}/${userId}/avatar/${avatarId}`),
        uploadAvatar: (userId, data) => request.post(`${baseUrl}/${userId}/avatar`, data),
        deleteAvatar: (userId, avatarId) => request.delete(`${baseUrl}/${userId}/avatar/${avatarId}`),
    }
};
