import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './app-commons/login';
import Registration from './app-commons/registration';
import Createpost from './components/createpost';
import PostsComponent from './components/my_posts';
import ProtectRoute from './app-commons/protectRoute';
import { AuthProvider } from './app-commons/authentication';

function App() {

  return (
    <AuthProvider>
    <Router>
      {/* <header className='px-2 py-4 flex flex-row items-center justify-between '>
        <div className='text-2xl font-bold'>App Name</div>
        <div className='px-2 flex flex-row items-center space-x-2'>
          <div ><Link className='text-black px-4 py-2 bg-green-300 hover:bg-green-500 rounded-md' to={'/newpost'}>New Post</Link></div>
           <div><button onClick={()=>handler()} className='text-black px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-md' ></button></div>
        </div>
      </header>
      <nav>
        <ul className='flex flex-row space-x-4 py-2 px-4 bg-gray-200 '>
          <li>
            <Link className='text-black hover:text-blue-500' to={'/'}>Dashboard</Link>
          </li>
          <li>
            <Link className='text-black hover:text-blue-500' to={'/myposts'}>My Posts</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<ProtectRoute><Dashboard/></ProtectRoute>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
