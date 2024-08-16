import React from 'react'
import "./LinkCard.css"
import imgview from "./views.png"

import QRCode from 'react-qr-code'

function LinkCard({title,target,slug,views,createdAt}) {
  const shortUrl=`${process.env.REACT_APP_API_KEY}/${slug}`

  return (
    <div className='link-card'> 
  <h3 className='link-card-title'>{title ||"No title"} </h3>

   <a href={ shortUrl} target="_blank"  className='link-card-title-target' > 
   <span className='shorturl'> shorturl: </span>
   { shortUrl}
   </a>
  
    <a href={target} target="_blank"   className='link-card-title-target'>
    <span className='Target'>Targeturl: </span>
    {target.substring(0,50)}{target.length>50?"...":null}

 
    </a>
  
   <span className='link-card-title-views'><img src={imgview} alt='view-img' className='view-img'/> {views}</span>
   <span className='link-card-views-text'>
    {views > 0 ? `${views} people visit this url` : 'share this link'}
   </span>
   {(<QRCode value={`${process.env.REACT_APP_API_KEY}/${slug}`} size={45} className='qr'/>)}
   <p  className='link-card-title-cre'>{new Date (createdAt).toLocaleString()}</p>
    </div>
  )
}

export default LinkCard
