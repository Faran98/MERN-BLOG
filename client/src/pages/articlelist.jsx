import React, { Component } from "react";
import articlecontent from "./articlecontent";
import Articles from "../component/articles";


class ArticleList extends Component {
  state = {};
  render() {
    return (
      <div className="mb-10 max-w-screen-md mx-auto pt-20">
        <h1 className="sm:text-4xl text-2xl font-bold my-6">Articles</h1>
        <div className="container py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Articles Article={articlecontent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
