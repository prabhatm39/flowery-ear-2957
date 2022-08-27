import React from 'react';
import { Routes , Route } from 'react-router-dom';
import PackageDetails from '../Pages/PackageDetails';
import Packages from '../Pages/Packages';
import Home from './../Components/Home';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/packages' element={<Packages />} />
      <Route path='/packages/:id' element={<PackageDetails />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
