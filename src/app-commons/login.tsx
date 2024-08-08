import React, { useContext } from 'react';
import AuthContewxt from './authentication';
import { useNavigate } from 'react-router-dom';

function Login() {

    const { logIn }: any = useContext(AuthContewxt);
    const navigate = useNavigate();

    const handleLogin = () => {
        logIn();
        navigate('/dashboard');
    };
    
    return (
        <div>
            {/* Login form */}
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
}

export default Login;