import React from 'react'
import "./LinkCard.css"

function LinkCard({title,target,slug,views,createdAt}) {

  return (
    <div className='link-card'> 
  <h3 className='link-card-title'>{title}</h3>
  <p className='link-card-title-slug'>short url:{slug}</p>
   <a className='link-card-title-target' href={target}>Target url:{target}</a>
   <p className='link-card-title-views'>Views:{views}</p> 
   <p  className='link-card-title-cre'>{new Date (createdAt).toLocaleString()}</p>
    </div>
  )
}

export default LinkCard
