import { Formik, Form, Field, ErrorMessage } from 'formik';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { FaRegSave } from 'react-icons/fa';

import { useService } from './../../../../hooks/useService';
import { userServiceFactory } from './../../../../services/userService';
import { useAuthContext } from './../../../../contexts/AuthContext';

import { UserValidationSchema } from './userValidationSchema';

import './UserForm.css';

export const UserForm = ({
    isEditable,
    onEditChange
}) => {

    const { user, onUserUpdate } = useAuthContext();

    const { t } = useTranslation();

    const userService = useService(userServiceFactory);

    const onEditUser = async (value) => {
        try {
            const { firstName, lastName } =  {...value }
            const result = await userService.update(user._id, { firstName, lastName });

            if(result.user) onUserUpdate(result.user);
            onEditChange();
        } catch (err) {
            console.log(err.message);
        }
    }

    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
    };

    return (
        <div id="user-form">
            <Formik
                initialValues={initialValues}
                validationSchema={() => UserValidationSchema(t)}
                onSubmit={values => onEditUser(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Row>

                            <Col className="col-md-6 offset-md-3">
                                <h3>{isEditable ? t('updateUser') : t('userData') }</h3>

                                <div className="form-group">
                                    <label htmlFor="firstName">{t('firstName')}</label>
                                    <Field name="firstName" className="form-control" disabled={!isEditable} />
                                    <div className="error-message">
                                        <ErrorMessage name="firstName" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">{t('lastName')}</label>
                                    <Field name="lastName" className="form-control" disabled={!isEditable} />
                                    <div className="error-message">
                                        <ErrorMessage name="lastName" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('email')}</label>
                                    <Field name="email" type="email" className="form-control" disabled={true} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">{t('role')}</label>
                                    <Field name="role" className="form-control" disabled={true} />
                                </div>
                            </Col>

                            {isEditable && <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="submit"><FaRegSave /> {t('save')}</button>
                            </div>}

                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
};