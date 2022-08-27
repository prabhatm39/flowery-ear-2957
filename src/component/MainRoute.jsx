import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detailes from './Detailes'
import Newde from './Newde'
import VisitDubai from './VisitDubai'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <VisitDubai/> }/>
            <Route path='/details' element={ <Newde/> } />
        </Routes>
    </div>
  )
}

export default MainRoute