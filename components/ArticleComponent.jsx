import Link from "next/link";
import React from "react";
import SmallPost from "./SmallPost";

const ArticleComponent = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-full md:m-2 mt-2 mdx:w-full article-glassmorphism rounded-md p-3 shadow-2xl border">
      <div className="w-full flex flex-col items-center justify-center">
        {/* <Link href={`/articles/${data?.slug}`}> */}
        <p className="hover:text-blue-500 cursor-pointer underline decoration-yellow-500 text-2xl font-bold inline-block text-center">
          {data?.title}
        </p>
        {/* </Link> */}
        {/* small post */}
        {data?.post?.map((item, index) => (
          <SmallPost data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
