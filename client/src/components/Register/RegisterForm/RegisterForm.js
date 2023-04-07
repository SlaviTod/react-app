import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { IoPencilOutline } from 'react-icons/io5';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import { useToastContext } from './../../../contexts/ToastContex';
import { useService } from './../../../hooks/useService';
import { userServiceFactory } from '../../../services/userService';


import { RegisterValidationSchema } from './registerValidationSchema';
import { toastType } from '../../../constants/toastData';

import './RegisterForm.css';

export const RegisterForm = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const { t } = useTranslation();

    const { addToast } = useToastContext();

    const userService = useService(userServiceFactory);
    const navigate = useNavigate();

    const [toastKey, setToastKey] = useState(0);
    const [showPass, setShowPass] = useState(false);
    const [showCfPass, setShowCfPass] = useState(false);

    const onPassToggle = () => {
        setShowPass(st => !st);
    }
    const onCfPassToggle = () => {
        setShowCfPass(st => !st);
    }

    const onRegisterSend = async (values) => {
        try {
            await userService.register(values);
            addToast({
                key: `${toastKey} ${t('registration_msg_success')}`,
                type: toastType.success,
                title: t('success'),
                message: t('registration_msg_success'),
            })
            navigate('/login');
        } catch (err) {
            addToast({
                key: `${toastKey} ${t('registration_msg_error')}`,
                type: toastType.error,
                title: t('error'),
                message: `${t('registration_msg_error')}. ${t('tryAgain')}`,
            })
            setToastKey(i => i++);
            console.log(err.message);
        }
    };



    return (
        <div id="reg-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => RegisterValidationSchema(t)}
                onSubmit={values => onRegisterSend(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">

                            <div className="col-md-6 offset-3">
                                <div className="form-group">
                                    <label htmlFor="firstName">{t('firstName')}</label>
                                    <Field name="firstName" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="firstName" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">{t('lastName')}</label>
                                    <Field name="lastName" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="lastName" />
                                    </div>
                                </div>
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
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">{t('cf_pass')}</label>
                                    <span className="form-icon" onClick={onCfPassToggle}>
                                        {showCfPass ? <BsEyeSlash /> : <BsEye />}
                                    </span>
                                    <Field type={showCfPass ? "text" : "password"} name="confirmPassword" className="form-control" />
                                    <div className="error-message">
                                        <ErrorMessage name="confirmPassword" />
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <p>{t('login_msg_1')}

                                        <Link to="/login" className="link">{t('login_msg_btn')}</Link>
                                        {t('login_msg_2')}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="submit"><IoPencilOutline /> {t('register')}</button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};