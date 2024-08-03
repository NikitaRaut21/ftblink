import React, { useState } from 'react'
import "./Home.css"
import toast,{Toaster} from'react-hot-toast';


import axios from 'axios';

function Home() {
    const [linkData,setLink]=useState({
        title:"",
        target:"",
        slug:""
    })
    const generateLink= async(req,res)=>{
        const response =await axios.post(`${process.env.REACT_APP_API_KEY}/link`,linkData)
        if (response.data.success){
            toast.success("Link generated successfully");
            setLink({
                title:"",
              target:"",
               slug:"" 
            })

        }
        else{
            toast.error(response.data.message)
        }
    }
  return (

    <div>
        <h1 className='title-heading'>Shorter URL!</h1>
      <h1 className='title'>do not waste time to long links...!</h1>
      <form className='url-form'>
        <input
         type='text'
         placeholder='Title'
         value={linkData.title}
         className='input-url'
         onChange={(e)=>{setLink({
            ...linkData,
           title:e.target.value
           
         })
       
         }}
         />
           <input
         type='text'
         placeholder='Target'
         value={linkData.target}
           className='input-url'
         onChange={(e)=>{setLink({
            ...linkData,
           target:e.target.value
         })

         }}
         />
           <input
         type='text'
         placeholder='slug'
         value={linkData.slug}
           className='input-url'
         onChange={(e)=>{setLink({
            ...linkData,
           slug:e.target.value
         })

         }}
        
         />
      <button type='button'
      className='btn-link'
      onClick={generateLink}>
    shorten
      </button>
        
      </form>
      <Toaster/>
    </div>
  )
}

export default Home
