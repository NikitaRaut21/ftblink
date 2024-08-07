import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'



export default function Contact() {
  return (
    <div>
        <Navbar/>
        <h3 className='title-con'>Contact us</h3>
        <div className='contact-container'>
            
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26817444539!2d73.72107860073469!3d19.99110534032964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723006102577!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map-container'></iframe>  
        </div>
        <div className='contact-frm'>
        <form className='url-form'>
          <h4 className='suggestion'>give any suggestion...!</h4>
            <input
              type='text'
              placeholder='Enter Name'
              className='input-url'
              />
            <input
              type='text'
              placeholder='Enter Phone no'
             className='input-url'
             />
            <input
              type='text'
              placeholder='Enter your Email'
            className='input-url'
               />
                <textarea
              type='text'
              placeholder='Enter your message'
              className='input-url'
               />
            <button type='button'  style={{textDecoration:'none'}}
              className='btn-link'
             >
             submit
            </button>

          </form>
        </div>
        
        </div>
       
      <Footer/>
    </div>
   
  )
}
