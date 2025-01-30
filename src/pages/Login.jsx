import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
  const { user, isLoading , isError , meassage } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // Form State
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

          dispatch(loginUser(formData));
  };

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-800 pt-6'>
        <h1 className='text-center text-gray-500 text-3xl font-bold'>Loading....</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-800 pt-6'>
      <h1 className='text-center text-white text-3xl font-bold'>Login</h1>
      <div className='container border border-gray-600 p-7 rounded-md my-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Enter Email'
            className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
            value={email}
            name='email'
            autoComplete="email"
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Enter Password'
            className='w-full border rounded-md p-2.5 my-2 placeholder: text-sm'
            value={password}
            name='password'
            autoComplete="current-password"
            onChange={handleChange}
            required
          />
          <button
            className='w-full bg-green-700 rounded-md py-2 my-2 text-white font-bold text-xl hover:bg-green-800 duration-200'
            type='submit'
            disabled={isLoading}>
            Sign In
          </button>

          <p className='text-white text-base'>
            Don't have an account? &nbsp;
            <Link
              to={'/register'}
              className='text-sky-400 underline decoration-1 underline-offset-2 hover:text-sky-600'>
              Create One!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
