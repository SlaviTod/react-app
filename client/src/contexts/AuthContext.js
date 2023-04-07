import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';
import { userServiceFactory } from './../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.token);
    
    const onLoginSend = async (data) => {
        try {
            const result = await authService.login(data);
            let avatar;

            if(result.user.avatarId) {
                const userService = userServiceFactory(result.token);
                const res = await userService.getAvatar(result.user._id, result.user.avatarId);
                avatar = URL.createObjectURL(res); 
            }

            setAuth({ ...result, avatar });

            navigate('/concerts');
        } catch (err) {
            console.log(err.message);
        }
    };


    const onLogout = async () => {
        await authService.logout();

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
    };

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