import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { IoCloseSharp } from 'react-icons/io5';
import { BsPencilSquare } from 'react-icons/bs';

import { formatDate, formatTime } from './../../../../utilities/format/dateFormat';
import { useCommentsContext } from '../../../../contexts/CommentsContext';
import { EditCommentForm } from './EditComment';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { role } from '../../../../constants/roles';


export const CommentItem = ({
    comment,
}) => {

    const [isEditable, setEditable] = useState(false);

    const { t } = useTranslation();
    const { user, isAuthenticated } = useAuthContext();

    const { onDeletingComment, onUpdatingComment } = useCommentsContext();

    
    const isAuthorizedForEdit = isAuthenticated && user._id === comment.userId; 
    const isAuthorizedForDelete = isAuthenticated && (user._id === comment.userId || user.role === role.admin); 


    const onUpdateClick = () => {
        setEditable(st => !st);
    }

    const onFormClose = () => {
        setEditable(false);
    }

    // () => onUpdatingComment(pieceId, commentId, { comment }) comment.pieceId, comment._id, 
    return (
        <>
            <Card className="comment">
                <div className="top-buttons">
                    {isAuthorizedForEdit && <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip className="btn-icon-t" > {t('update_commentar')} </Tooltip>
                        }
                    >
                        <span className="icon" onClick={() => onUpdateClick()}>
                            <BsPencilSquare />
                        </span>
                    </OverlayTrigger>}

                    {isAuthorizedForDelete && <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip className="btn-icon-t" > {t('delete_comment')} </Tooltip>
                        }
                    >
                        <span className="icon" onClick={() => onDeletingComment(comment.pieceId, comment._id)}>
                            <IoCloseSharp />
                        </span>
                    </OverlayTrigger>}
                </div>
                <Card.Header as="h5">{comment.author}, {formatDate(new Date(comment.updatedAt))}
                    {formatTime(new Date(comment.updatedAt))}</Card.Header>
                <Card.Body>
                    {!isEditable && <Card.Text>
                        {comment.comment}
                    </Card.Text>}
                    {isEditable && <EditCommentForm comment={comment} onFormClose={onFormClose} />}
                </Card.Body>
            </Card>
        </>
    );
};