import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';

export const LogoutGuard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();
    console.log("🚀 ~ file: LogoutGuard.js:9 ~ isAuthenticated:", isAuthenticated)
    
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
}