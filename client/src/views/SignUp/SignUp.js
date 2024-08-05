import React, { useState } from 'react'
import "./SignUp.css"
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import{ Link} from 'react-router-dom'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'

function SignUp() {
  const [user,setUser]=useState({
    fullName:'',
    email:'',
    profession:'',
   
    password:''
  })
  const signUP= async(req,res)=>{
    const response=await axios.post(`${process.env.REACT_APP_API_KEY}/signup`,{
      fullName:user.fullName,
      email:user.email,
      profession:user.profession,
     
      password:user.password
 })
 if(response.data.success){
  toast.success(response.data.message)
  setUser({
    fullName:'',
    email:'',
    profession:'',
  
    password:''
  })
 }
 else{
  toast.error(response.data.message)
 }
  }
  return (
    <>
      <div>

        <form className='form-container'>
          <h1 className='title'>SignUP</h1>
          <div className="form-group input">
            <label for="exampleInputEmail1">fullName</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName"
            value={user.fullName} 
            onChange={(e)=>{
              setUser({
                ...user,
                fullName:e.target.value
              })
            }}/>

          </div>
          <div className="form-group input">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
            value={user.email} 
            onChange={(e)=>{
              setUser({
                ...user,
                email:e.target.value
              })
            }}/>

          </div>
          
            <div class="form-group input">
              <label for="exampleFormControlSelect1"> select profession</label>
              <select class="form-control" id="exampleFormControlSelect1"
             value={user.profession} 
             onChange={(e)=>{
               setUser({
                 ...user,
                 profession:e.target.value
               })
             }} >
                <option>Profession</option>
                <option>learning</option>
                <option>Business</option>
                <option>another</option>

              </select>
            </div>

          
         
          <div className="form-group input">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            value={user.password} 
            onChange={(e)=>{
              setUser({
                ...user,
                password:e.target.value
              })
            }} />
          </div>

          <button type="button" className="btn-sub" onClick={signUP}>signup</button>
          <Link to='/login' className='auth-link'>Already Have n Account? Login</Link>
        </form>
       
      </div>
      <Toaster/>
  
    </>
  )
}

export default SignUp
