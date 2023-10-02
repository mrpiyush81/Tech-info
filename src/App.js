
import './App.css';
import { Appcontext } from './components/context/Appcontext';
import { useContext, useEffect } from 'react';
import { Routes,Route,useSearchParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App(){
  const {fetchBlogPosts}=useContext(Appcontext)
  
  const [serchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
      const page=serchParams.get("page") ?? 1;

      if(location.pathname.includes('tags')){
        
        const tag= location.pathname.split('/').at(-1).replaceAll('-',' ');
        fetchBlogPosts(Number(page),tag); 
      }
      else if(location.pathname.includes('categories')){
        
        const category= location.pathname.split('/').at(-1).replaceAll('-',' ');
        fetchBlogPosts(Number(page),null,category); 
      }
      else{
        fetchBlogPosts(Number(page));
      }

  },[location.pathname,location.search]);

  
  return (
    <Routes>
      
         <Route path="/" element={<Home/>} />
         <Route path="/blog/:blogId" element={<BlogPage/>} />
         <Route path="/tags/:tag" element={<TagPage/>} />
         <Route path="/categories/:category" element={<CategoryPage/>} />
      </Routes>

  );
}

export default App;
