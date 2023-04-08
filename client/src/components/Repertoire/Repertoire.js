import { useTranslation } from 'react-i18next';

import { RepertoireForm } from './RepertoireForm/RepertoireForm';

export const Repertoire = () => {

    const { t } = useTranslation();

    return (
        <section id="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>{t('repertoire')}</h2>
                    <p>{t('repertoire_sub')}</p>
                </div>

                <RepertoireForm/>

            </div>
        </section>
    );
};