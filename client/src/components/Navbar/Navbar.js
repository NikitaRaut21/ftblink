import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Navbar.css'
import toast,{Toaster} from 'react-hot-toast'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand" href="#">FTB LINk</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-sec">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <span className='home-logout'onClick={()=>{
        localStorage.clear()
        toast.success('logout successfully')
        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
      }}>
        Logout
      </span>
                       
                    </ul>
                </div>
            </nav>
        
    </div>
  )
}

export default Navbar