import React, { useEffect, useRef, useState } from 'react'
import '../styles/adduser.css'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  let [user,setUser]=useState()
  let name=useRef()
  let email=useRef()
  let role=useRef()
  let dept=useRef()
  let password=useRef()

  let navigate=useNavigate()

  useEffect( ()=>{
    let fetchUrl=async()=>{
      let userData=await fetch("http://localhost:4000/Users")
      .then(resp=>resp.json())
      setUser(userData)
    }
    fetchUrl()
    
},[user])

   let handleSubmit=async(e)=>{
    e.preventDefault()

    let newUser={
      name : name.current.value,
      email : email.current.value,
      role : role.current.value,
      department:dept.current.value,
      password : password.current.value
    }

    await fetch(`http://localhost:4000/Users`,{
      method : "POST",
      headers : {"Content-type" :"application/json"},
      body : JSON.stringify(newUser)
      
    })
    navigate('/adminport')
   }

  return (
    <>
     <div className="adduser">
        <h2>New User</h2>
        <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-container">
          <div className="form-cont">
            <label htmlFor="">Name</label>
            <input ref={name} type="text" />
          </div>
          <div className="form-cont">
            <label htmlFor="">Email</label>
            <input ref={email} type="text" />
          </div>
          <div className="form-cont">
            <label htmlFor="">Role</label>
            <input ref={role} type="text" />
          </div>
          <div className="form-cont">
             <label htmlFor="">Department</label>
             <input ref={dept} type="text" />
          </div>
          <div className="form-cont">
            <label htmlFor="">password</label>
            <input ref={password} type="text" />
          </div>
          </div>
            <button>Create</button>
        </form>
        </div>
     </div>
    </>
  )
}

export default AddUser
