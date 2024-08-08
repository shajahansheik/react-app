import React, { useContext } from 'react';
import AuthContewxt from './authentication';
import { Navigate } from 'react-router-dom';

function ProtectRoute({children}:any) {
    const {isAuthenticated}:any= useContext(AuthContewxt)
    return (
        isAuthenticated ? children : <Navigate to='/login' />
    );
}

export default ProtectRoute;