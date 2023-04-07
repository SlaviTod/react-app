import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { FaRegSave } from 'react-icons/fa';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import { useService } from './../../../../hooks/useService';
import { userServiceFactory } from './../../../../services/userService';

import { PassValidationSchema } from './passValidationSchema';

import './ChangePass.css';

export const ChangePassForm = ({
    userId,
    onPassChange,
}) => {

    const initialValues = {
        oldPass: '',
        password: '',
        confirmPassword: '',
    };

    const { t } = useTranslation();

    const userService = useService(userServiceFactory);

    const [showPass, setShowPass] = useState({
        oldPass: false,
        password: false,
        confirmPassword: false,
    });

    const onPassToggle = (key) => {
        setShowPass(st => ({...st, [key]: !st[key]}));
    }

    const onPassSent = async (value) => {
        try {
            await userService.changePass(userId, value);

            onPassChange();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div id="pass-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => PassValidationSchema(t)}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    onPassSent(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <div>{t('changePass')}</div>

                                <div className="form-group">
                                    <label htmlFor="oldPass">{t('oldPass')}</label>
                                    <span className="form-icon" onClick={() => onPassToggle('oldPass')}>
                                        {showPass.oldPass ? <BsEyeSlash /> : <BsEye />}
                                    </span>
                                    <Field type={showPass.oldPass ? "text" : "password"} name="oldPass" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="oldPass" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">{t('password')}</label>
                                    <span className="form-icon" onClick={() => onPassToggle('password')}>
                                        {showPass.password ? <BsEyeSlash /> : <BsEye />}
                                    </span>
                                    <Field type={showPass.password ? "text" : "password"} name="password" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">{t('cf_pass')}</label>
                                    <span className="form-icon" onClick={() => onPassToggle('confirmPassword')}>
                                        {showPass.confirmPassword ? <BsEyeSlash /> : <BsEye />}
                                    </span>
                                    <Field type={showPass.confirmPassword ? "text" : "password"} name="confirmPassword" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="confirmPassword" />
                                    </div>
                                </div>


                                <div className="d-flex align-items-center justify-content-center">
                                    <button type="submit" className="submit"><FaRegSave /> {t('save')}</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};