import React from 'react'
import "./Footer.css"
import gmail from './gmail.png'
import call from './call.png'
import map from './map.png'
import imglink from './link.png'

function Footer() {
  return (
    <div className='footer ft'>
      <div class="card">
        <div className="card-header title-footer">
          🔗Strong connections open doors to new opportunities
        </div>
        <div className="card-body card-bd">
          <h5 className="card-title"><img src={imglink} className='quick'/> Quick links</h5>
          <p className="card-text">
            <div className='head'>
              <div  className='url-short'>
                <ul>
                  <li>Strong connections lead to greater collaboration and success.</li>
                  <li>Building links enhances personal and professional development.</li>
                  <li>Strong connections lead to greater collaboration and success.</li>
                </ul>
              </div>
              <div >
                <p className='link-dt'>
                  <h5> links</h5>
                  <a href='/home' className='link'>Home</a>
                  <a href='/login' className='link'>login</a>
                  <a href='/contact' className='link'>Contact</a>
                </p>

              </div>
              <div className='contact-container'>
                <div className='contact'>
                  <a href='mailto: rautnikita427@gmail.com' className='cnt '><img src={gmail} height={'30px'} />rautnikita427@gmail.com</a>
                  <a href='tel:8862009153' className='cnt' ><img src={call} height={'30px'} /> 8862009153</a>
                  <a href="https://maps.app.goo.gl/jGjvwSM56KvTT9Wb8" className='cnt'> <img src={map} height={'30px'} />Nashik</a>

                </div>
              </div>

            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
