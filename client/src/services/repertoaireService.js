import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/api/repertoaire`;

export const repertoaireServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        getAllPieces: () => request.get(baseUrl),
        getOnePiece: (pieceId) => request.get(`${baseUrl}/${pieceId}`),
        createPiece: (data) => request.post(baseUrl, data),
        updatePiece: (pieceId, data) => request.put(`${baseUrl}/${pieceId}`, data),
        deletePiece: (pieceId) => request.delete(`${baseUrl}/${pieceId}`),
        
        getPieceComments: (pieceId) => request.get(`${baseUrl}/${pieceId}/comments`),
        getComment: (pieceId, commentsId) => request.get(`${baseUrl}/${pieceId}/comments/${commentsId}`),
        createComment: (pieceId, data) => request.post(`${baseUrl}/${pieceId}/comments`, data),
        updateComment: (pieceId, commentsId, data) => request.put(`${baseUrl}/${pieceId}/comments/${commentsId}`, data),
        deleteComment: (pieceId, commentsId) => request.delete(`${baseUrl}/${pieceId}/comments/${commentsId}`),
    }
};