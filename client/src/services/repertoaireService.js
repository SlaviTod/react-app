import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/api/repertoire`;

export const repertoireServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        getAllPieces: () => request.get(baseUrl),
        getOnePiece: (pieceId) => request.get(`${baseUrl}/${pieceId}`),
        createPiece: (data) => request.post(baseUrl, data),
        updatePiece: (pieceId, data) => request.put(`${baseUrl}/${pieceId}`, data),
        deletePiece: (pieceId) => request.delete(`${baseUrl}/${pieceId}`),
    }
};