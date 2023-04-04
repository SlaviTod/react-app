import { useTranslation } from 'react-i18next';

import './About-us.css';

export const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>{t('about')}</h2>
                    <p>{t('title')}</p>
                </div>

            </div>
        </section>
    );
};