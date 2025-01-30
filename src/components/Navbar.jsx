import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../features/auth/authSlice';

const Navbar = () => {
  
  const {user} = useSelector(state => state.auth);

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logoutUser()) 
  }
  
  return (
    <nav className='bg-gray-900 py-2 px-2 flex items-center justify-between'>
    <Link to={"/"} className='text-white text-xl font-semibold'>Auth App</Link>
    
    <div>
      {!user ? (
      <>
        <Link to={"/register"} className='bg-yellow-500 py-2 px-3 rounded-md text-sm font-bold text-white me-2 hover:bg-yellow-600'>
        Register</Link>
        <Link to={"/login"} className='bg-green-500 py-2 px-3 rounded-md text-sm font-bold text-white me-2  hover:bg-green-600'>
        Login</Link>
      </>
      ) : (
        <button className='bg-red-500 py-2 px-3 rounded-md text-sm font-bold text-white hover:bg-red-600' 
        onClick={handleLogOut}>
        Logout</button>
      )}

    </div>
  </nav>
  )
}

export default Navbar