import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { IoLogInOutline } from 'react-icons/io5';

import { useAuthContext } from '../../../contexts/AuthContext';

import { LoginValidationSchema } from './loginValidationSchema';

import './LoginForm.css';

export const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const { t } = useTranslation();

    const { onLoginSend } = useAuthContext();

    const [showPass, setShowPass] = useState(false);

    const onPassToggle = () => {
        setShowPass(st => !st);
    }


    return (
        <div id="log-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => LoginValidationSchema(t)}
                onSubmit={values => onLoginSend(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">

                            <div className="col-md-6 offset-3">
                                <div className="form-group">
                                    <label htmlFor="email">{t('email')}</label>
                                    <Field name="email" type="email" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">{t('password')}</label>
                                    <span className="form-icon" onClick={onPassToggle}>
                                    {showPass ? <BsEyeSlash /> : <BsEye />}
                                    </span>
                                    <Field type={showPass ? "text" : "password"} name="password" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <p>{t('register_msg_1')}<Link to="/register">{t('register_msg_btn')}</Link>{t('register_msg_2')}</p>
                                </div>

                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="submit"><IoLogInOutline /> {t('login')}</button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};