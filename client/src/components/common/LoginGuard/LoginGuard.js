import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

export const LoginGuard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
}