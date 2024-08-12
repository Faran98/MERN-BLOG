import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import articlecontent from "./articlecontent";
import Articles from "../component/articles";
import Notfound from "./notfound";
import Commentlist from "../component/commentlist";
import Addcomments from "../component/addcomments";
const Article = () => {
  const { name } = useParams();
  const article = articlecontent.find(
    (article) => article.name === name
  );
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  useEffect(()=>{
   const fetchdata=async ()=>{
     const result = await fetch(`/api/articles/${name}`);
     const data=await result.json();
     console.log(data);
     setArticleInfo(data);
     
   };
   fetchdata();
},[name]);
  if(!article) return <Notfound/>
  const otherArticles = articlecontent.filter(article => article.name !== name);
    return (
    <div className="mb-10 max-w-screen-md mx-auto pt-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6">{article.title}</h1>

      {article.content.map((content, index) => (
        <p key={index} className="mx-auto text-base leading-relaxed mb-4">
          {content}
        </p>
      ))}
          
           <Commentlist comments={articleInfo.comments} />
     <Addcomments articleName={name} setArticleInfo={setArticleInfo}/>
      <h1 className="sm:text-2xl text-xl font-bold my-6">Other Articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles Article={otherArticles}/>
      </div>


    </div>
  );
};

export default Article;
