import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  IoCloseSharp } from 'react-icons/io5';

import { useCommentsContext } from './../../../../contexts/CommentsContext';

import { CommentValidationSchema } from './commentValidationSchema';

export const CommentForm = ({
    onFormClose,
    comment = '',
}) => {
    
    const { pieceId } = useParams();

    const initialValues = {
        comment,
    };

    const { t } = useTranslation();

    const { onAddingComment } = useCommentsContext();


    return (
        <div id="comment-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => CommentValidationSchema(t)}
                onSubmit={values => onAddingComment(pieceId, values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">

                            <div className="col-md-6 offset-3">
                                <div className="form-group">
                                    <label htmlFor="comment"></label>
                                    <Field name="comment" as="textarea" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="comment" />
                                    </div>
                                </div>

                            <div className="d-flex align-items-center justify-content-center buttons">
                                <button type="submit" className="submit"> {t('add_comment')}</button>
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