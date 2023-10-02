import { createContext, useState } from "react";
import {baseUrl} from '../BaseUrl'
export const Appcontext = createContext(); 

export default  function AppcontextProvider({children}){
 
    const [loading,setloading]=useState(false);
    const [page,setPage]=useState(1);
    const [totalpages,settatalpages]=useState(null);
    const [posts,setposts]=useState([]);

    async function fetchBlogPosts(page=1,tag=null,category){
        setloading(true);
        
        let Url= `${baseUrl}?page=${page}`
        if(tag!==null){ 
            Url+=`&tag=${tag}`
        }
        if(category){
            Url+=`&category=${category}`
        }
        try{
         const result=await fetch(Url);
         const data=await result.json();
         console.log(data);
         setPage(data.page);
         settatalpages(data.totalPages);
         setposts(data.posts)

        }
        catch(err){
            console.log('errror in fetcing data');
            setPage(1);
            settatalpages(null);
            setposts([])

        }
        setloading(false)
    }

    
    
    const value ={
       posts,
       setposts,
       loading,
       setloading,
       page,
       setPage,
       totalpages,
       settatalpages,
       fetchBlogPosts
    };
    
    return <Appcontext.Provider value={value}>
           {children}
           </Appcontext.Provider>
}