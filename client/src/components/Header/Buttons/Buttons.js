import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Stack from 'react-bootstrap/Stack';
import { IoLogInOutline, IoLogOutOutline, IoPencilOutline } from 'react-icons/io5';

import { useAuthContext } from '../../../contexts/AuthContext';

import './Buttons.css';

export const Buttons = ({
    isLogged
}) => {

    const { t } = useTranslation();

      const { isAuthenticated } = useAuthContext();
    
    return (
        <Stack direction="horizontal" gap={3}>
            {!isAuthenticated &&
                <>
                    <Link to="/login" className="action-btn"><IoLogInOutline /> {t('login')} </Link>
                    <Link to="/register" className="action-btn"><IoPencilOutline /> {t("register")} </Link>
                </>
            }

            {isAuthenticated &&
                <>
                    <Link to="/logout" className="action-btn"><IoLogOutOutline /> {t("logout")}</Link>
                </>
            }
        </Stack>
    );
};