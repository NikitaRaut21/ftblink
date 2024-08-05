import React from 'react'
import "./Login.css"

function Login() {
  return (
    <>
    <div>
    <form className='form-container'>
          <h1 className='title'>Login</h1>
        
          <div className="form-group input">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
        <div className="form-group input">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="button" className="btn-sub">Login</button>
        </form>
    </div>
    </>
  )
}

export default Login
