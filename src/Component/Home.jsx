import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let [user,setUser]=useState([])
  useEffect( ()=>{
    let fetchUrl=async()=>{
      let userData=await fetch("http://localhost:4000/Users")
      .then(resp=>resp.json())
      setUser(userData)
    }
    fetchUrl()
    
},[])
console.log(user);
let navigate=useNavigate()
let handleClick=()=>{
  navigate('/adminport/adduser')
}

let handleDelete=(id,name)=>{
//   let bool=window.alert(`do you want to delete ${name} user ?...`)
//  if(bool){
window.confirm(`are you sure want ${name} from user`)
  fetch(`http://localhost:4000/Users/${id}`,{method :"DELETE"})
  // navigate('/adminport')
//  }
//  else{
//   alert('user not deleted')
//  }
}
  return (
  <>
    <div className="home">
      <div className="admin">
        <div className="adminbtn">
          <button>Admin</button>
        </div>
      </div>
      <div className="adminContainer">
       <div className="top">
        <div className="left"><h2>User Management</h2></div>
        <div className="right"><button onClick={handleClick}>+  AddUser</button></div>
       </div>
       <div className="admintable">
        <div className="tabletop">
          <div className="left"><h2>User's</h2></div>
          <div className="right">
            <div className="search">
              <form action="">
              <input type="search" placeholder='serach' />
              <button><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
        </div>
        <div className="act-table">
          <table border={0}>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((elem,i)=>{
                  let {id,name,email,role,department}=elem
                  return(
                    <>
                      <tr>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                        <td>{department}</td>
                        <td><button onClick={()=>{handleDelete(id,name)}}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                        </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
        </div>
       </div>
      </div>
    </div>
  </>
  )
}

export default Home
