import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToastContext } from './ToastContex';

import { authServiceFactory } from '../services/authService';
import { userServiceFactory } from './../services/userService';

import { toastType } from './../constants/toastData';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { addToast } = useToastContext();

    const authService = authServiceFactory(auth.token);

    const onLoginSend = async (data) => {
        try {
            const result = await authService.login(data);
            let avatar;

            try {
                if (result.user.avatarId) {
                    const userService = userServiceFactory(result.token);
                    const res = await userService.getAvatar(result.user._id, result.user.avatarId);
                    avatar = URL.createObjectURL(res);
                }
            } catch (err) {
                console.log(err.message);
            }

            setAuth({ ...result, avatar });

            navigate('/portfolio');
        } catch (err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('login_msg_error')}. ${t('tryAgain')}`,
            })
        }
    };


    const onLogout = async () => {
        if(auth.user) await authService.logout(auth.user._id);

        setAuth({});
    };

    const onUserUpdate = (user) => {
        setAuth({ ...auth, user });
    }

    const onAvatarUpdate = (avatar) => {
        setAuth({ ...auth, avatar });
    }

    const contextValues = {
        onLoginSend,
        onLogout,
        onUserUpdate,
        onAvatarUpdate, // TODO
        user: auth.user,
        avatar: auth.avatar,
        token: auth.token,
        isAuthenticated: !!auth.token,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};