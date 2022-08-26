import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Packages from '../Pages/Packages';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Packages />}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
