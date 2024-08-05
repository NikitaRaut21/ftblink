import React from 'react'
import "./SignUp.css"
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function SignUp() {
  return (
   <>
   <div>
   
   <form className='form-container'>
    <h1 className='title'>SignUP</h1>
  <div className="form-group input">
    <label for="exampleInputEmail1">fullName</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group input">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group input">
    <label for="exampleInputEmail1">profession</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <div class="form-group">
    <label for="exampleFormControlSelect1"> select profession</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Profession</option>
      <option>learning</option>
      <option>Business</option>
      <option>another</option>
      
    </select>
  </div>
    
  </div>
  <div className="form-group input">
    <label for="exampleInputPassword1">Date of Birth</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group input">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="button" className="btn-sub">Submit</button>
</form>
   </div>
   </>
  )
}

export default SignUp
