import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoPencilOutline, IoCloseSharp } from 'react-icons/io5';

import { useToastContext } from './../../../../contexts/ToastContex';
import { useService } from './../../../../hooks/useService';
import { repertoireServiceFactory } from './../../../../services/repertoaireService';

import { RepertoireValidationSchema } from './../../../Repertoire/RepertoireForm/repertoireValidationSchema';
import { toastType } from './../../../../constants/toastData';
import { categories } from './../../../../constants/categories';
import { useRepertoireContext } from '../../../../contexts/PieceContext';


export const EditRepertoireForm = ({
    piece,
    onEditChange
}) => {
    const categoriesArr = Object.values(categories);

    const initialValues = {
        category: piece.category,
        videoLinks: piece.videoLinks,
        translations: {
            en: {
                name: piece.translations.en.name,
                author: piece.translations.en.author,
                arrangement: piece.translations.en.arrangement,
                description: piece.translations.en.description,
            },
            bg: {
                name: piece.translations.bg.name,
                author: piece.translations.bg.author,
                arrangement: piece.translations.bg.arrangement,
                description: piece.translations.bg.description,
            },
        },
    };

    const { t } = useTranslation();

    const navigate = useNavigate();

    const { addToast } = useToastContext();

    const repertoireService = useService(repertoireServiceFactory);
    const { editPiece } = useRepertoireContext();

    const onPieceSend = async (values) => {
        console.log("🚀 ~ file: EditPiece.js:51 ~ onPieceSend ~ values:", values)
        try {
            
            const res = await repertoireService.updatePiece(piece._id, values);
            
            editPiece(piece._id, res.piece);
            onEditChange();

            addToast({
                type: toastType.success,
                title: t('success'),
                message: t('repertoire_up_msg_success'),
            })

        } catch (err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('repertoire_up_msg_error')}. ${t('tryAgain')}`,
            })
        }
    }

    return (
        <div id="piece-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => RepertoireValidationSchema(t)}
                onSubmit={values => onPieceSend(values)}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div className="row">

                            <div className="col-md-8 offset-2">
                                <div className="form-group">
                                    <label htmlFor="category">{t('category')}</label>
                                    <Field component="select" name="category" className="form-control">
                                        {categoriesArr.map((category) => <option key={category} value={category}>{t(category)}</option>)}
                                    </Field>
                                    <div className="error-message">
                                        <ErrorMessage name="category" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="videoLinks">{t('videoLinks')}</label>
                                    <FieldArray
                                        name="videoLinks"
                                        render={arrayHelpers => (
                                            <div>
                                                {values.videoLinks.map((friend, index) => (
                                                    <div key={index}>
                                                        <button type="button" className="form-icon close" onClick={() => arrayHelpers.remove(index)}>
                                                            <IoCloseSharp />
                                                        </button>
                                                        <Field name={`videoLinks.${index}`} className="form-control" />

                                                    </div>
                                                ))}
                                                <button
                                                    type="button" className="submit"
                                                    onClick={() => arrayHelpers.push('')}
                                                >
                                                    {t('addLink')}
                                                </button>
                                            </div>
                                        )}
                                    />

                                    <div className="error-message">
                                        <ErrorMessage name="videoLinks" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div>{t('en_lang')}</div>

                                <div className="form-group">
                                    <label htmlFor="name">{t('name')}</label>
                                    <Field name="translations.en.name" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.en.name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="author">{t('author')}</label>
                                    <Field name="translations.en.author" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.en.author" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="arrangement">{t('arrangement')}</label>
                                    <Field name="translations.en.arrangement" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.en.arrangement" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">{t('description')}</label>
                                    <Field name="translations.en.description" type="text-area" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.en.description" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div>{t('bg_lang')}</div>

                                <div className="form-group">
                                    <label htmlFor="name">{t('name')}</label>
                                    <Field name="translations.bg.name" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.bg.name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="author">{t('author')}</label>
                                    <Field name="translations.bg.author" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.bg.author" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="arrangement">{t('arrangement')}</label>
                                    <Field name="translations.bg.arrangement" type="text" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.bg.arrangement" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">{t('description')}</label>
                                    <Field name="translations.bg.description" type="text-area" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="translations.bg.description" />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="d-flex justify-content-center buttons">
                            <button type="submit" className="submit"><IoPencilOutline /> {t('save')}</button>
                            <button type="button" className="submit" onClick={onEditChange}><IoCloseSharp /> {t('close')}</button>
                        </div>

                    </Form >
                )}
            </Formik >
        </div >
    );
};