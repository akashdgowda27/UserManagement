import React, { useState } from 'react'
import '../styles/landingpage.css'
import AdminLogin from './AdminPortal/AdminLogin'
import UserLogin from './UserLogin'

const Landingpage = () => {
    let [type,setType]=useState(true)

    let handleClick=()=>{
        setType(!type)
    }
  return (
   <>
     <div className="landingpage">
        <div className="container">
            <div className={type ? "admin" : "user"} onClick={handleClick}>
                {type ? "Admin Login" : "User Login"}
            </div>
            <div className="form">
                {type ? <AdminLogin /> : <UserLogin />}
            </div>
        </div>

     </div>
   </>
  )
}

export default Landingpage
