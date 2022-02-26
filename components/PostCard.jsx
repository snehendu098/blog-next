import React from "react";

const PostCard = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full md:m-3 my-2 md:w-[40%] white-glassmorphism xl:w-[30%] rounded-t-md pb-3 shadow-2xl flex flex-col items-center justify-center bg-slate-800">
      <img
        src={data?.fetauredImage?.url}
        alt="image"
        className="w-full h-60 object-cover rounded-t-md shadow-lg"
      />
      <p className="text-2xl font-bold py-2 text-center">{data?.title}</p>
      <p className="text-sm px-5 text-center">{data?.description}</p>
      <div className="border p-2 mt-2 rounded-md hover:text-blue-500 hover:border-blue-500 cursor-pointer">
        Learn More
      </div>
    </div>
  );
};

export default PostCard;
