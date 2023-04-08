import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/api/repertoire`;

export const commentServiceFactory = (token) => {
    const request = requestFactory(token);

    return {       
        getPieceComments: (pieceId) => request.get(`${baseUrl}/${pieceId}/comments`),
        getComment: (pieceId, commentId) => request.get(`${baseUrl}/${pieceId}/comments/${commentId}`),
        addComment: (pieceId, data) => request.post(`${baseUrl}/${pieceId}/comments`, data),
        updateComment: (pieceId, commentId, data) => request.put(`${baseUrl}/${pieceId}/comments/${commentId}`, data),
        deleteComment: (pieceId, commentId) => request.delete(`${baseUrl}/${pieceId}/comments/${commentId}`),
    }
};