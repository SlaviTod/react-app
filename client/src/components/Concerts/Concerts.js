import { useTranslation } from 'react-i18next';

import './Concerts.css';

export const Concerts = () => {

    const { t } = useTranslation();

    return (
        <section id="concerts">
            <div className="container">

            <div className="section-title">
                    <h2>{t('concerts')}</h2>
                    <p>{t('concerts_up_sub')}</p>
                </div>


                <div className="section-title">
                    <h2>{t('concerts')}</h2>
                    <p>{t('concerts_past_sub')}</p>
                </div>

            </div>
        </section>
    );
};