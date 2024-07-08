import React, { useRef } from 'react'
import '../../styles/adminlogin.css'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  let adminId=useRef()
  let password=useRef()
  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()

    let adminData={id:'admin@gmail.com',pass:'admin123'}
    let adminUserData={id:adminId.current.value,password:password.current.value}
    if(adminUserData.id===adminData.id && adminUserData.password===adminData.pass){
      alert('Login Successful')
      navigate('/adminport')
      }
      else{
        alert('Invalid Credentials')
        }

  }

  return (
    <>
      <div className="adminlogin">
        <div className="form" >
          <form action="" onSubmit={handleSubmit}>
          <input ref={adminId} type="text" placeholder='admin@gmail.com'/>
          <input ref={password} type="text" placeholder='admin123'/>
          <button>Login</button>
          </form>
          <a href="">Forget Password ?</a>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
