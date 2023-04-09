import { useTranslation } from 'react-i18next';
import { CommentItem } from './CommentItem';
import { useCommentsContext } from '../../../../contexts/CommentsContext';

export const CommentsList = () => {

    const { t } = useTranslation();
    const { comments } = useCommentsContext();

    return (
        <div className="comments-container">

            <div className="row">
                <div className="col-md-8 offset-2">
                    {comments.length
                        ?
                        <>
                            {comments.map(comment => <CommentItem key={comment._id} comment={comment} />)}
                        </>
                        :
                        <>
                            {t('noComments')}
                        </>
                    }
                </div>
            </div>
        </div>
    );
};