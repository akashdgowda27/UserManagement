import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Component/Landingpage'

import AdminPort from './Component/AdminPortal/AdminPort'

const App = () => {
  return (
    <>
      
      
      <BrowserRouter>
      
      <Routes>
        <Route element={<Landingpage />} path='/' />
        <Route element={<AdminPort />} path='/adminport/*'/>
      </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
