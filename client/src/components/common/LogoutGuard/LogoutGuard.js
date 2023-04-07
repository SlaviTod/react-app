import { Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

export const LogoutGuard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (isAuthenticated) {
        return <Outlet />;
    }

    return children ? children : <Outlet />
}