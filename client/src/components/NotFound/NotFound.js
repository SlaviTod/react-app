import { useTranslation } from 'react-i18next';
import { BsEmojiFrown } from 'react-icons/bs';

import './NotFound.css';

export const NotFound = () => {

    const { t } = useTranslation();

    return (
        <section id="notfound">
            <div className="container">

                <div className="section-title">
                    <h2>{t('notfound')}</h2>
                    <p>{t('notfound_sub')}</p>
                </div>

                <div className="icon">
                    <BsEmojiFrown />
                </div>

            </div>
        </section>
    );
};