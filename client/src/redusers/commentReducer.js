//TODO use pieceContext for one piece only and add coments there  
export const commentReducer = (state, action) => {
    
    switch (action.type) {

        case 'getComments': 
        return [...action.payload];
        case 'addComment':
            return [
                    ...state,
                    {
                       ...action.payload,
                    }
                ];
        case 'updateComment': 
            return state.map(x => x._id === action.payload._id ? action.payload : x);
        case 'deleteComment': 
                return state.filter(c => c._id !== action.payload);
        default:
            return state;
    }
};