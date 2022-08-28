import React from 'react'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Singin/SingUp'
import {Routes,Route} from "react-router-dom"
import {Navbar} from '../Components/Navbar/Navbar'
import VisitDubai from '../Components/VisitDubai/VisitDubai'
import HomePageDetails from '../Components/Decs/HomePageDetails'
import { Detailesdinning } from '../Components/VisitDubai/Details/Detailesdinning'
import PackageDetails from '../Components/RaviPack/PackageDetails'
import Packages from '../Components/RaviPack/Packages';
import {Home} from "../Components/Prabhat/Home";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/visit-dubai" element={<VisitDubai />} />
      <Route path = "/details" element={<HomePageDetails />} />
      <Route path = '/dinning' element = { <Detailesdinning/> }/>
      <Route path='/packages' element={<Packages />} />
      <Route path='/packages/:id' element={<PackageDetails />} />
    </Routes>
  )
}

export default MainRoute;