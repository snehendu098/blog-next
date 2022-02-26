import React from "react";

const SmallPost = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col w-full mt-3 border-l-4 pl-2 border-blue-500 cursor-pointer hover:text-yellow-500">
      <p className="text-lg font-bold text-left truncate">{data?.title}</p>
      <p className="text-sm truncate text-left">{data?.description}</p>
    </div>
  );
};

export default SmallPost;
