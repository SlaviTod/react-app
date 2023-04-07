import { useTranslation } from 'react-i18next';

import { UserDetails } from './UserDetails/UserDetails';

import './Profile.css';

export const Profile = () => {

    const { t } = useTranslation();


    return (
        <section id="profile" className="profile">
            <div className="container">

                <div className="section-title">
                    <h2>{t('profile')}</h2>
                    <p>{t('profile_sub')}</p>
                </div>

                <UserDetails />
            </div>
        </section>
    );
};
