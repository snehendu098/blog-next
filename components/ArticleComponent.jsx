import React from "react";

const ArticleComponent = ({ data }) => {
  return (
    <div className="w-[45%] md:m-2 mt-2 mdx:w-full blue-glassmorphism">
      <div className="w-full flex items-center justify-center">
        <p className="hover:text-blue-500 cursor-pointer text-2xl font-bold inline-block text-center">
          {data?.title}
        </p>
      </div>
    </div>
  );
};

export default ArticleComponent;
