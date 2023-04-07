import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AvatarImage } from './../../Images/AvatarImage/AvatarImage';

import './Logo.css';

export const Logo = () => {

    const { t } = useTranslation();
    
    return (
        <div className="logo">
            <Link to="/" className="logo">
                <AvatarImage imgUrl="img/avatar.jpg" className="img-fluid rounded-avatar" /></Link>
            <Link to="/">{t("title")}</Link>
        </div>
    );
};
