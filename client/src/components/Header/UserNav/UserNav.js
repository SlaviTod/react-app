import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { UserAvatar } from './../../Images/UserAvatar/UserAvatar';
import { useAuthContext } from './../../../contexts/AuthContext';

import './UserNav.css';

export const UserNav = () => {

    const { user, avatar } = useAuthContext();

    const { t } = useTranslation();


    return (
        <div className="d-flex justify-content-space-around theme-c">
            <div className="user-name">
                {user.firstName}
                {/* {user.lastName} */}
            </div>
            <div className="user-img">
                <OverlayTrigger
                    placement="left"
                    overlay={
                        <Tooltip className="profile" > {t('seeProfile')} </Tooltip>
                    }
                >
                    <Link to="/profile">
                        <UserAvatar avatar={avatar}/>
                    </Link>
                </OverlayTrigger>

            </div>
        </div>
    );
};