import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast,{Toaster} from'react-hot-toast';

import axios from 'axios';
import LinkCard from '../../components/LinkCard/LinkCard';

function Home() {
    const [linkData,setLink]=useState({
        title:"",
        target:"",
        slug:""
    })
    const generateLink= async(req,res)=>{
      if(!linkData.title ||!linkData.slug ||!linkData.target){
        toast.error("please enter all details")
        return
      }
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

    const[userLinks,setLinks]=useState([])
   const fetchLink= async()=>{
    const response= await axios.get(`${process.env.REACT_APP_API_KEY}/links`)
    setLinks(response.data.data)
   }
   useEffect(()=>{
    fetchLink();

   },[])

 return (

    <div>
        <h1 className='title-heading title-head'>Shorter URL!</h1>
      <h1 className='title title-ft'>do not waste time to long links...!</h1>
      <div className='main-link-container'>
      <div className='link-container'>
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
      </div>
      <div className='my-link'>
        <h2>My links</h2>
        {
          userLinks.map((links,i)=>{
            const {title,target,slug,views,createdAt}=links
        return <LinkCard
        key={i}
        title={title}
        target={target}
        slug={slug}
        views={views}
        createdAt={createdAt}

        />
          })
        }
     
      </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default Home
