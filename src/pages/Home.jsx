import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate();

  // console.log('Home Page mounted');

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user])
  
  return (
    <div className='min-h-screen bg-gray-800 pt-6 px-20'>
        <h1 className='text-center text-white text-2xl mb-7'>Welcome To The Home Page</h1>
        {/* <div className = 'container bg-orange-200 rounded-md p-8'>  */}
        <div className='w-3xl bg-slate-400 p-5 rounded-md flex flex-col'>
        <h1>Name : {user.name}</h1>
        <h1>Email : {user.email}</h1>
        </div>
        
        
        
        {/* </div> */}
    </div>
  )
}

export default Home;
