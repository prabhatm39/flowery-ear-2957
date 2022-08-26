import React from 'react'
import Login from './Login&Signup/Login'
import SignUp from './Login&Signup/SignUp'
import {Routes,Route} from "react-router-dom"
import Navbar from './Navbar'

const Mainrouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Mainrouting