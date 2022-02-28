import React from "react";
import PostCard from "./PostCard";

const PostComponent = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data?.posts.map((item, index) => (
        <PostCard data={item} key={index} />
      ))}
    </div>
  );
};

export default PostComponent;
