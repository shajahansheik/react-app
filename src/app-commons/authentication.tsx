import React, { createContext, useEffect, useState } from 'react';

const AuthContewxt = createContext({});


export const AuthProvider = ({children}:any) =>{
    const [isAuthenticated,setIsAuthenticated]=useState(false)

// useEffect(()=>{
//     const token=localStorage.getItem('token');
//     if(token){
//         setIsAuthenticated(true)
//     }
// },[])
const logIn=()=>{
    // localStorage.setItem('token','some');
    setIsAuthenticated(true);
}
const logOut=()=>{
    // localStorage.removeItem('token')
    setIsAuthenticated(false)
}
    return (
        <AuthContewxt.Provider value={{isAuthenticated,logIn,logOut}} >
            {children}
        </AuthContewxt.Provider>
    );
}

export default AuthContewxt;