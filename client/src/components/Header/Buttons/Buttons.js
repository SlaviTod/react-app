import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Stack from 'react-bootstrap/Stack';
import { IoLogInOutline, IoLogOutOutline, IoPencilOutline } from 'react-icons/io5';

import './Buttons.css';

export const Buttons = ({
    isLogged
}) => {

    const { t } = useTranslation();
    
    return (
        <Stack direction="horizontal" gap={3}>
            {!isLogged &&
                <>
                    <Link to="/login" className="action-btn"><IoLogInOutline /> {t('login')} </Link>
                    <Link to="/register" className="action-btn"><IoPencilOutline /> {t("register")} </Link>
                </>
            }

            {isLogged &&
                <>
                    <Link to="/logout" className="action-btn"><IoLogOutOutline /> {t("logout")}</Link>
                </>
            }
        </Stack>
    );
};