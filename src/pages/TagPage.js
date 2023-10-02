import React from 'react'

import Blogs from '../components/Blogs'

import {  useLocation, useNavigate } from 'react-router-dom'
import DemoPage from './DemoPage'


function TagPage() {
    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1)
  return (
    <DemoPage className=''>

     <div>
         <button onClick={()=>{navigation(-1)}}  className='rounded-md border-2 px-4 py-1' >Back</button>
         <h2 >Blogs Tagged
           <span>#{tag}</span>
         </h2>
     </div>
     
    
        <Blogs></Blogs>
       
    </DemoPage>
   
 
  )
}

export default TagPage
