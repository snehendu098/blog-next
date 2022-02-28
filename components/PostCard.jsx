import Link from "next/link";
import React from "react";

const PostCard = ({ data, style }) => {
  // console.log(data);
  return (
    <>
      <div
        className={`w-full md:m-3 my-2 md:w-[40%] bg-white rounded-xl xl:w-[30%] rounded-t-md pb-3 shadow-sm flex flex-col items-center ${style}`}
      >
        <img
          src={data?.featuredImage?.url}
          alt="image"
          className="w-full relative t-0 h-60 object-cover rounded-t-md shadow-lg"
        />
        <p className="text-2xl font-bold p-2 text-center">{data?.title}</p>
        <p className="text-sm px-5 text-center">{data?.description}</p>
        <Link href={`/articles/${data?.slug}`}>
          <div className="border p-2 mt-2 bg-gray-400 rounded-md hover:font-bold hover:border-blue-500 cursor-pointer ">
            Learn More
          </div>
        </Link>
      </div>
    </>
  );
};

export default PostCard;
