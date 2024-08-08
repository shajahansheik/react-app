import React, { useContext } from 'react';
import AuthContewxt from '../app-commons/authentication';
import { Link, Route, Routes } from 'react-router-dom';
import Createpost from './createpost';

function Dashboard() {
    const { logOut }: any = useContext(AuthContewxt);
    return (
        <div>
            <h1>Dashboard</h1>
            <header className='px-2 py-4 flex flex-row items-center justify-between '>
                <div className='text-2xl font-bold'>App Name</div>
                <div className='px-2 flex flex-row items-center space-x-2'>
                    <div ><Link className='text-black px-4 py-2 bg-green-300 hover:bg-green-500 rounded-md' to={'newpost'}>New Post</Link></div>
                    <div><button onClick={() => logOut()} className='text-black px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-md' >Log out</button></div>
                </div>
            </header>
            <nav>
                <ul className='flex flex-row space-x-4 py-2 px-4 bg-gray-200 '>
                    <li>
                        <Link className='text-black hover:text-blue-500' to={''}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className='text-black hover:text-blue-500' to={'myposts'}>My Posts</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<div>Dashboard</div>} />
                <Route path='myposts' element={<div>My Posts</div>} />
                <Route path='newpost' element={<div><Createpost/></div>} />
                
            </Routes>
        </div>
    );
}

export default Dashboard;