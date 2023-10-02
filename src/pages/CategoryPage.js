import React from 'react'

import Blogs from '../components/Blogs'

import {  useLocation, useNavigate } from 'react-router-dom'
import DemoPage from './DemoPage'
function CategoryPage() {
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1)
  return (
   
    <DemoPage>

    <div className='mt-[20px]'>
        <button  className='rounded-md border-2 px-4 py-1' onClick={()=>{navigation(-1)}}>Back</button>
        <h2>Blogs On
          <span className='font-bold'> {category}</span>
        </h2>
    </div>
    
   
       <Blogs></Blogs>
     
    </DemoPage>
  )
}

export default CategoryPage
