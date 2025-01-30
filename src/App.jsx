import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import PrivateComponents from './components/PrivateComponents';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<PrivateComponents/>}>
        <Route path = "" element = {<Home/>}/>


      </Route>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/login" element = {<Login/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
