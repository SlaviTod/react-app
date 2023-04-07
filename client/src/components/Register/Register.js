import { useTranslation } from 'react-i18next';

import { RegisterForm } from './RegisterForm/RegisterForm';

import './Register.css';

export const Register = () => {

    const { t } = useTranslation();

    return (
        <section id="register" className="register">
            <div className="container">

                <div className="section-title">
                    <h2>{t('register')}</h2>
                    <p>{t('register_sub')}</p>
                </div>

                <RegisterForm />

            </div>
        </section>
    );
};