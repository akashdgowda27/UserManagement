import React from 'react'
import '../styles/userlogin.css'

const UserLogin = () => {
  return (
    <>
    <div className="userlogin">
      <div className="form">
        <input type="text" placeholder='enter UserID '/>
        <input type="text" placeholder='enter User password'/>
        <button>Login</button>
        <a href="">Forget Password ?</a>
        <span>Don't have an Account? | <a href="">Create Account</a></span>
      </div>
    </div>
  </>
  )
}

export default UserLogin
