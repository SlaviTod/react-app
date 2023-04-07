import { useTranslation } from 'react-i18next';

import { LoginForm } from './LoginForm/LoginForm';

import './Login.css';

export const Login = () => {

    const { t } = useTranslation();

    return (
        <section id="login" className="login">
            <div className="container">

                <div className="section-title">
                    <h2>{t('login')}</h2>
                    <p>{t('login_sub')}</p>
                </div>

                <LoginForm />

            </div>
        </section>
    );
};