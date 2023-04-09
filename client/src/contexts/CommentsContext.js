import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import { useService } from './../hooks/useService';
import { commentServiceFactory } from '../services/commentService';
import { commentReducer } from '../redusers/commentReducer';
import { useToastContext } from './ToastContex';
import { toastType } from './../constants/toastData';


export const CommentsContext = createContext();

export const CommentsProvider = ({
    children,
}) => {

    const { pieceId } = useParams();
    const [comments, dispatch] = useReducer(commentReducer, []);

    const commentService = useService(commentServiceFactory);
    const { t } = useTranslation();
    const { addToast } = useToastContext();

    const onLoadComments = (comments) => {
        dispatch({ type: 'getComments', payload: comments});
    }

    
    const onAddingComment = async (pieceId, values) => {
        try {
            const res = await commentService.addComment(pieceId, values);

            dispatch({ type: 'addComment', payload: res.comment});
        } catch(err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('add_comment_msg_error')}. ${t('tryAgain')}`,
            });
        }
    }

    const onUpdatingComment = async (values) => {
        dispatch({ type: 'updateComment', payload: values});
    }

    const onDeletingComment = async (pieceId, commentId) => {
        try {
            await commentService.deleteComment(pieceId, commentId);

            dispatch({ type: 'deleteComment', payload: commentId});
        } catch(err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('update_comment_msg_error')}. ${t('tryAgain')}`,
            });
        }
    }

    const contextValues = {
        comments,
        pieceId,
        onLoadComments,
        onAddingComment,
        onUpdatingComment,
        onDeletingComment,
    }
    return (
        <>
            <CommentsContext.Provider value={contextValues}>
                {children}
            </CommentsContext.Provider>
        </>
    );
};

export const useCommentsContext = () => {
    const context = useContext(CommentsContext);

    return context;
};