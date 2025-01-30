import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../features/auth/authSlice'

const Register = () => {


  const {user , isError , isLoading,  message} = useSelector(state => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : "",
  });

  const {name , email , password , password2} = formData;

  //Form State
  const handleChange = (e) =>{
    // e.preventDefault()
    // console.log(e.target.name , e.target.value);
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });

  };

  //Handle Submit 
  const handleSumbit = (e) => {
    e.preventDefault();

    if(password !== password2){
      toast.error("Passwords Not Match" , {
        theme : "dark" ,
        position : 'top-center',
        autoClose: 2000
      })
    }else{
      dispatch(registerUser(formData))
    }
  }

  useEffect(() => {
    if(user) {
      navigate("/");
    }else{
      navigate("/register")
    }

    if(isError && message) {
      toast.error(message, {
        position:"top-center",
        autoClose: 2000
      })
    }

  },[user , isError , message]);

  if(isLoading){
    return(
      <div className='min-h-screen bg-gray-800 pt-6'>
      <h1 className='text-center text-gray-500 text-3xl font-bold'>
      Loading....</h1>
      </div>
    )
  }

  
  return (
    <div className='min-h-screen bg-gray-800 pt-6'>
      <h1 className='text-center text-white text-3xl font-bold'>
      Register Here
      </h1>
      <div className=' container border border-gray-600 p-7 rounded-md my-5'>
        <form onSubmit={handleSumbit}>
          <input 
          type='text' 
          placeholder='Enter Name' 
          className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
          name = "name"
          value={name}
          onChange={handleChange}
          />

          <input 
          type='email' 
          placeholder='Enter Email' 
          className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
          name = "email"
          value={email}
          onChange={handleChange}
          />

          <input 
          type='password' 
          placeholder='Enter Password' 
          className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
          name = "password"
          value={password}
          onChange={handleChange}
          />

          <input 
          type='password' 
          placeholder='Confirm Password' 
          className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
          name = "password2"
          value={password2}
          onChange={handleChange}
          />


          <button className='w-full bg-sky-700 rounded-md py-2 my-2 text-white font-bold text-xl hover:bg-sky-800 duration-200'>
          Sign Up
          </button>

          <p className='text-white text-base'>Have an account ? &nbsp; 
          <Link to = {"/login"} className='text-sky-400 underline decoration-1 underline-offset-2 hover:text-sky-600'>Login !</Link> 
          </p>

        
        </form>
      </div>
    </div>
  )
}

export default Register;