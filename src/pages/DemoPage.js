import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
function DemoPage({children}) {
  return (
    <div> 
        <Header></Header>
        <div className='flex justify-center items-center  '>

         <div className=''>
            {children} 
         </div>
        </div> 
       
        <Pagination ></Pagination>  
    </div>
  )
}

export default DemoPage
