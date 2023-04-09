import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import { FaRegCommentDots } from "react-icons/fa";
import { CommentsList } from './CommentsList';
import { useEffect, useState } from 'react';


import { useAuthContext } from '../../../../contexts/AuthContext';
import { useToastContext } from './../../../../contexts/ToastContex';
import { CommentForm } from './CommentForm';
import { toastType } from './../../../../constants/toastData';

import './Comments.css';
import { useCommentsContext } from '../../../../contexts/CommentsContext';

export const CommentsC = () => {

    const { t } = useTranslation();

    const { isAuthenticated } = useAuthContext();
    const isAuthorizedForCommenting = isAuthenticated; // TODO add check user not blocked 
    const [isAddCommentOpen, setAddCommentOpen] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const { comments } = useCommentsContext();
    const { addToast } = useToastContext();

    useEffect(() => {
        setAddCommentOpen(false);
    }, [comments.length])

    const openAddComment = () => {
        setAddCommentOpen(st => !st);
        setShowComments(st => !st);
        if(!isAuthorizedForCommenting) addToast({
            type: toastType.warning,
            title: t('warning'),
            message: `${t('add_comment_msg_warning')}`,
        });
    }

    const onShowComments = () => {
        setShowComments(st => !st);
    }

    const onFormClose = () => {
        setAddCommentOpen(false);
    }

    return (
        <div className="comments">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="d-flex justify-content-center" onClick={(e) => { onShowComments() }}>
                        <span>
                            {comments.length} {t('comments')}
                        </span>

                        <span className="comment" onClick={(e) => { console.log(e); e.preventDefault(); openAddComment() }}> <FaRegCommentDots /> {t('add_comment')}</span>

                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
            {showComments &&
                        <CommentsList />}
            {isAuthorizedForCommenting && isAddCommentOpen &&
                <CommentForm onFormClose={onFormClose} />}
        </div>
    );
};