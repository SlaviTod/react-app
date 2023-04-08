import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

export const LoginGuard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();
    console.log("🚀 ~ file: LoginGuard.js:9 ~ isAuthenticated:", isAuthenticated)
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}