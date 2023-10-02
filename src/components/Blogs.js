import React, { useContext } from 'react'
import { Appcontext } from './context/Appcontext'
import Spinner from './Spinner';
import Card from './Card';
function Blogs() {
    const {loading,posts}=useContext(Appcontext);
  return (
    <div className='w-11/12 max-w-[630px]  py-5   mb-[16px]  flex flex-col gap-y-7 justify-center items-center'>
      {
        loading?<Spinner/>:
        (
            posts.length===0
            ?
            (<div>No data  found</div>)
            :
           
        ( posts.map((post)=>(<Card post={post}key={post.id} />)))
        
        )
           
            
      }
    </div>
  )
}

export default Blogs
