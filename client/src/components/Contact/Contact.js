import { useTranslation } from 'react-i18next';
import { BsPhone, BsEnvelopeAt, BsGeoAlt } from 'react-icons/bs';
import { organisation } from './../../constants/org-info';

import './Contacts.css';

export const Contact = () => {

    const { i18n, t } = useTranslation();

    return (
        <section id="contact">
            <div className="container">

                <div className="section-title">
                    <h2>{t('contact')}</h2>
                    <p>{t('contact_sub')}</p>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <BsPhone className="icon" />
                                <h4>{t('location')}:</h4>
                                <p>{organisation[i18n.language].location.address}, {organisation[i18n.language].location.city}, {organisation[i18n.language].location.country}</p>
                            </div>

                            <div className="email">
                                <BsEnvelopeAt className="icon" />
                                <h4>{t('email')}:</h4>
                                <p>{organisation.email}</p>
                            </div>

                            <div className="phone">
                                <BsGeoAlt className="icon" />
                                <h4>{t('call')}:</h4>
                                <p>{organisation.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <div className="map">
                            <iframe title="location"
                                src={organisation.maplink}
                                frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};