import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'

import Card from '../components/Card'

import { useLocation, useNavigate } from 'react-router-dom';
import { Appcontext } from '../components/context/Appcontext';

const baseUrl="https://codehelp-apis.vercel.app/api/"
function BlogPage() {
const [Blog,setBlog]=useState(null);
const [relatedBlogs,setrelatedBlogs]=useState([]);
const location=useLocation();
const navigation=useNavigate();
const {loading,setloading}=useContext(Appcontext);
const blogId=location.pathname.split('/').at(-1);
    async function fetchBlogPosts(){
        setloading(true);
        let Url=`${baseUrl}get-blog?blogId=${blogId}`;
        console.log(Url)
        try {
            const res = await fetch(Url);
            const data= await res.json();
            console.log(data);
            setBlog(data.blog);
            setrelatedBlogs(data.relatedBlogs);
            
        } catch (error) {
            console.log(error);
            setBlog(null);
            setrelatedBlogs([]);
        }
        setloading(false);
    }
    useEffect(()=>{
        if(blogId){
        fetchBlogPosts();
        }
    },[location.pathname])

  return (
    <div>
        <Header></Header>
      

     {
    <div className='flex justify-center items-center w-full'>
       
        {
        loading? <p className='mt-[200px]'>Loading</p> :
        Blog ? (

            <div className='flex  flex-col justify-center  w-11/12 max-w-[670px]'>
            <div>
        <button  className='rounded-md border-2 mt-4 mb-5 px-4 py-1' onClick={()=>{
            navigation(-1);
        }}>Back</button>
      </div>
                <Card post={Blog} key={Blog.id} ></Card>
                <h2 className='font-bold mt-5 mb-5 text-[20px]'>Related Blog</h2>
            {
                relatedBlogs.map((blog)=>(
                    
                    <Card  post={blog}  key={blog.id}></Card>
                    
                    )
                    )
                }   
            </div>
        ) : (<p>No Blog Found</p>)
    }
   
    </div>
     }

    </div>
  )
}

export default BlogPage
