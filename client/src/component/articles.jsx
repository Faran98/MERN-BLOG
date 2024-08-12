import React from "react";
import { Link } from "react-router-dom";

const Articles = ({Article}) => {
  return (
    <>
      {Article.map((articles, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-opacity-60 rounded-lg  overflow-hidden">
            {" "}
            <Link to={`/article/${articles.name}`}>
              <img
                src={articles.thumbnail}
                className="lg:h-48 md:h-fit w-full object-cover object-center"
                alt="Thubnail"
              />

              <h1 className="pl-6 sm:text-4xl text-2xl font-bold my-6">
                {articles.title}
              </h1>
              <p className="pl-6 mx-auto text-base leading-relaxed mb-4 pr-1">
                {articles.content[0].substring(0, 100)}...
              </p>
            </Link>
       
            <div className="flex items-center flex-wrap">
              <Link
                className="text-indigo-500 inline-flex items-center md:mb-2 pl-6"
                to={`/article/${articles.name}`}
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
