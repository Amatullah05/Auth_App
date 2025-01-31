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
    <div className='min-h-screen bg-indigo-300 pt-6 px-20  max-sm:px-1 md:px-4'>
        <h1 className='text-center font-bold text-3xl mb-7 text-rose-800'>Welcome To The <br></br>Home Page</h1>

        <div className='w-3xl bg-fuchsia-400 p-5 pb-10 flex flex-col mx-20  outline outline-8 outline-white outline-offset-4 max-md:mx-8 max-sm:p-3'>
        <h1 className=' text-white font-semibold text-2xl max-sm:text-[14px] max-md:text-xl'>ID : {Math.random()}</h1>
        <h1 className=' text-white font-semibold text-2xl max-sm:text-[14px] max-md:text-xl'>Name : {user?.name}</h1>
        <h1 className=' text-white font-semibold text-2xl max-sm:text-[14px] max-md:text-xl'>Email : {user?.email}</h1>
        </div>
        
        
        
        {/* </div> */}
    </div>
  )
}


// * 1e16

export default Home;
