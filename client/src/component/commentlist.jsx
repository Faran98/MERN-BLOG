import React from "react";

const Commentlist = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-4xl text-2xl mt-6 ml-6">Comments:</h3>
      {comments.map((comment, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
          <h4 className="font-bold">{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default Commentlist;
