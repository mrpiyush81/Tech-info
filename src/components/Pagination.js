import React from 'react'
import { Appcontext } from './context/Appcontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Pagination() {
    const navigation=useNavigate(); 
    const {page,totalpages, fetchBlogPosts}=useContext(Appcontext);
  return (
    <div className='w-full flex items-center justify-center border bg-white sticky bottom-0 shadow-md py-2'>
       <div className='flex justify-between w-11/12 max-w-[670px] items-center' >
      <div>
      { page>1 && <button onClick={()=>{navigation({search:`page=${page-1}`})}} className='rounded-md border-2 px-4 py-1 mx-2 '>Previous</button>
         
        }
        { 
          page<totalpages &&  <button onClick={()=>{navigation({search:`page=${page+1}`})}}  className='rounded-md border-2 px-4 py-1' >Next</button> 
        }
      </div>
     
         <p className='font-bold text-sm '>Page {page} of {totalpages}</p>
         </div>
    </div>
  )
}

export default Pagination
