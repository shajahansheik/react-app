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
        <div className='grid grid-cols-2 h-screen'>
            <div>
            {/* Login form */}
            <div className='flex flex-col space-y-4 items-center justify-center h-full px-20'>
            <h1 className='text-xl font-semibold'>Login</h1>
                <input className='px-2 py-2 text-lg outline-none hover:outline-none border rounded-md w-full' type="text" placeholder="username" />
                <input className='px-2 py-2 text-lg outline-none hover:outline-none border rounded-md w-full' type="password" placeholder="password" />
                <div className='w-full flex items-center justify-start space-x-2'>
                <input type="checkbox" name="pwd" id="pwd" className='rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' />
                <label className='ml-3 block text-sm leading-6 text-gray-900' htmlFor="pwd">Show Password</label>
                </div>
                <div className='w-full flex items-center justify-end'>
                <button className='px-10 py-2 rounded-md bg-gray-300 hover:bg-green-500 hover:text-white hover:shadow-md' onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
        </div>
            <div></div>
        </div>
    );
}

export default Login;