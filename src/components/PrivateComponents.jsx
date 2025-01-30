import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponents = () => {
    
    const {isLoggedIn , checkStatus} = useAuthStatus()

    if (checkStatus) {
        return (
          <div className='min-h-screen bg-gray-800 pt-6'>
            <h1 className='text-center text-gray-500 text-3xl font-bold'>
            Checking User Authentication
            </h1>
          </div>
        );
      }
      //if it get false the below code will run



    return isLoggedIn ? <Outlet/> : <Navigate to= {"/login"} />;   //These both are Components
 
 
}

export default PrivateComponents