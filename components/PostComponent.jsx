import React from "react";
import PostCard from "./PostCard";

const PostComponent = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {data?.posts.map((item, index) => (
        <PostCard data={item} key={index} />
      ))}
    </div>
  );
};

export default PostComponent;
