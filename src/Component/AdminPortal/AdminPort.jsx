import React from 'react'
import NavBar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import AddUser from '../AddUser'

const AdminPort = () => {
  return (
    <>
    <NavBar />
    <Routes >
      <Route element={<Home />} path='/' />
      <Route element={<AddUser />} path='/adduser' />

    </Routes>
    </>
  )
}

export default AdminPort
