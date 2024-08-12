import './App.css';
import Header from "./component/header"
import Home from './pages/home';
import About from './pages/about';
import Article from './pages/article';
import ArticleList from './pages/articlelist';
import {Routes , Route }from "react-router-dom"
import Notfound from './pages/notfound';

function App() {
  return (
   
   <div>
      <Header/>
    <Routes>

           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/articlelist" element={<ArticleList/>}/>
           <Route path="/article/:name" element={<Article/>}/>
           <Route path="*" element={<Notfound/>}/>
    </Routes>
   </div>
  );
}

export default App;
