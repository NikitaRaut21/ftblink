import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import linkimg  from './link.png'

import './Navbar.css'
import toast, { Toaster } from 'react-hot-toast'

function Navbar() {
  const [user, setUser] = useState('')

  const logout = async()=>{
    localStorage.clear()
    toast.success('logout successfully')
    setTimeout(()=>{
      window.location.href ="/login"
    },3000)
  }
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    setUser(currentUser)
  }, [])
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded  ">
        <a className="navbar-brand" href="#"><img src={linkimg} className='link-img'/>Quick links</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-sec">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            {
              user ? <li className="nav-item">
              <span className="nav-link logbtn" onClick={logout} >
                Logout
         </span>
            </li>
             :
             <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
               }
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>


          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar