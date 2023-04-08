import { CommentItem } from './CommentItem';
export const CommentsList = (
    comments,
) => {
    return (
        <>
        {comments.map(comment => <CommentItem key={comment._id} comment={comment}/>)}
        </>
    );
} ;