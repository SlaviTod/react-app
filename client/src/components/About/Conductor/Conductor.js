import { useTranslation } from 'react-i18next';

import './Conductor.css';

export const Conductor = () => {

  const { t } = useTranslation();

  return (
    <section id="conductor">
      <div className="container">

        <div className="section-title">
          <h2>{t('conductor')}</h2>
          <p>{t('conductor_sub')}</p>
        </div>
      </div>
    </section>
  );
};