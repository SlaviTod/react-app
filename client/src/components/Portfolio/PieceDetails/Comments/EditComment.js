import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  IoCloseSharp } from 'react-icons/io5';

import { useCommentsContext } from './../../../../contexts/CommentsContext';
import { useToastContext } from './../../../../contexts/ToastContex';
import { useService } from './../../../../hooks/useService';
import { commentServiceFactory } from './../../../../services/commentService';
import { CommentValidationSchema } from './commentValidationSchema';
import { toastType } from './../../../../constants/toastData';

export const EditCommentForm = ({
    onFormClose,
    comment,
}) => {
    
    const initialValues = {
        comment: comment.comment,
    };

    const { pieceId } = useParams();

    const { t } = useTranslation();
    const { addToast } = useToastContext();

    const { onUpdatingComment } = useCommentsContext();
    const commentService = useService(commentServiceFactory);


    const updateComment = async (values) => {
        try {
            const res = await commentService.updateComment(pieceId, comment._id, values);

            onUpdatingComment(res.comment);
            onFormClose();

        } catch(err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('update_comment_msg_error')}. ${t('tryAgain')}`,
            });
        }
    }

    return (
        <div id="comment-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => CommentValidationSchema(t)}
                onSubmit={values => updateComment(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">

                            <div className="col-md-10 offset-1">
                                <div className="form-group">
                                    <label htmlFor="comment"></label>
                                    <Field name="comment" as="textarea" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="comment" />
                                    </div>
                                </div>

                            <div className="d-flex align-items-center justify-content-center buttons">
                                <button type="submit" className="submit"> {t('edit_comment')}</button>
                                <button type="button" className="submit" onClick={onFormClose}><IoCloseSharp /> {t('close')}</button>
                            </div>

                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};