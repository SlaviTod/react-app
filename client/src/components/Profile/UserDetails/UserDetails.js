import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { BsPencilSquare, BsUnlock } from 'react-icons/bs';
import { useAuthContext } from './../../../contexts/AuthContext';
import { UserAvatar } from '../../Images/UserAvatar/UserAvatar';

import { UserForm } from './editUserData/UserForm';
import { ChangePassForm } from './changePass/ChangePassForm';

import { formatDate, formatTime } from './../../../utilities/format/dateFormat';

import './UserDetails.css';

export const UserDetails = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [changePass, setChangePass] = useState(false);

    const { user, avatar } = useAuthContext();

    const { i18n, t } = useTranslation();

    const locale = `${i18n.language}-${i18n.language.toUpperCase()}`;

    const onEditChange = () => {
        setIsEditable(st => !st);
    }

    const onPassChange = () => {
        setChangePass(st => !st);
    }


    return (
        <div className="row">
            <div className="col-md-6 col-sx-12 d-flex align-items-center justify-content-center theme-c">
                <div className="avatar align-self-center">
                    <UserAvatar avatar={avatar} />
                </div>

            </div>
            <div className="col-md-6 col-sx-12">
                <div className="buttons d-flex justify-content-end">
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip className="btn-icon-t" > {t('updateUser')} </Tooltip>
                        }
                    >
                        <span className="icon" onClick={onEditChange}>
                            <BsPencilSquare />
                        </span>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip className="btn-icon-t" > {t('changePass')} </Tooltip>
                        }
                    >
                        <span className="icon" onClick={onPassChange}>
                            <BsUnlock />
                        </span>
                    </OverlayTrigger>

                </div>
                <UserForm isEditable={isEditable} onEditChange={onEditChange}/>

            </div>

            <div className="row">
                <div className="col-md-6 col-sx-12">
                    {t('lastUpdate')}: {formatDate(user.updatedAt, locale)} {formatTime(user.updatedAt, locale)}
                </div>
                <div className="col-md-6 col-sx-12">
                    {changePass && <ChangePassForm onPassChange={onPassChange} userId={user._id} />}
                </div>
            </div>
        </div>
    );
};