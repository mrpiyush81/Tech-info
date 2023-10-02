import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({post}) {
  return (
    <div>
       <NavLink className='font-bold text-lg ' to={`/blog/${post.id}`}>
        {post.title}
       </NavLink>
       <p className='text-[15px] font-normal mt-[4px]'>
        By <span className='italic'>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className='underline font-bold'>{post.category}</NavLink> 
       </p>
       <p className='text-sm font-medium mt-[4px]'>Posted on {post.date}</p>
       <p className='text-md mt-[13px]'>{post.content}</p>
       <div className='flex gap-x-3  '>{post.tags.map((tag,index)=>{
        return <NavLink to={`/tags/${tag.replaceAll(' ','-')}`} className='text-blue-700 mt-[5px] underline font-bold text-xs' key={index} >{`#${tag}`}</NavLink>
       })}</div>
    </div>
  )
}

export default Card
