import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { organisation } from './../../constants/org-info';
import { BsPhone, BsMailbox, BsCheck2Square } from 'react-icons/bs';

import { SocialMediaList } from './../SocialMedia/SocialMediaList';

import './Footer.css';


export const Footer = () => {

    const { i18n, t } = useTranslation();

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3 className='theme-c'>{organisation[i18n.language].name}</h3>
                                <p>
                                    {organisation[i18n.language].location.city}, {organisation[i18n.language].location.country}<br />
                                    <span className="icon"><BsPhone /></span> {organisation.phone}<br />
                                    <span className="icon"><BsMailbox /></span> {organisation.email}<br />
                                </p>
                                <SocialMediaList mediaList={organisation.social} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>{t('footer_links')}</h4>
                            <ul>
                                <li><BsCheck2Square className="icon" /> <Link to="/">{t("home")}</Link></li>
                                <li><BsCheck2Square className="icon" /> <Link to="/about-us">{t("about")}</Link></li>
                                <li><BsCheck2Square className="icon" /> <Link to="/conductor">{t("conductor")}</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>...</h4>
                            <ul>
                                <li><BsCheck2Square className="icon" /> <Link to="/concerts">{t("concerts")}</Link></li>
                                <li><BsCheck2Square className="icon" /> <Link to="/portfolio">{t("portfolio")}</Link></li>
                                <li><BsCheck2Square className="icon" /> <Link to="/contact">{t("contact")}</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; {t('copyright')} <strong><span className='theme-c'>{organisation[i18n.language].name}</span></strong>. {t('copyright_1')}
                </div>
            </div>
        </footer>
    );
};