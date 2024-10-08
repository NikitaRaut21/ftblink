import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const loginNow = async () => {
  
    const response = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, {
      email: email,
      password: password
    })
    
   
    if (response.data.success) {
      toast.success(response.data.message)

      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

      toast.loading('Redirecting to dashboard...')

      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (

      <div>
        <Navbar/>
       
        <form className='form-container'>
          <h1 className='title'>Login🖊️</h1>

          <div className="form-group input">
            <label For="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control inputurl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className="form-group input">
            <label For="exampleInputPassword1">Password</label>
            <input type="password" className="form-control inputurl" id="exampleInputPassword1" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)
              } />
          </div>

          <button type="button" className="btn-sub" onClick={loginNow}>Login</button>
          <Link to="/signup" className='auth-link'>Don't have an account? Signup</Link>
        </form>
        <Toaster />
        <Footer/>
      </div>
     )
}

export default Login
