import Link from "next/link";
import React from "react";

const CateCont = ({ cate }) => {
  return (
    <div className="p-3 mt-3 w-full">
      <div
        style={{ borderRadius: "0.5rem" }}
        className="blue-glassmorphism flex flex-col items-center w-full"
      >
        <p className="text-2xl font-bold">Categories</p>
        <div className="w-full px-3  pb-3">
          {cate.categories.map((item) => {
            return (
              <div className="last:border-b-0 border-b p-2 ">
                <p
                  key={item.slug}
                  className=" hover:text-blue-800 hover:font-bold cursor-pointer "
                >
                  <Link href={`/category/${item.slug}`}>{item.title}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CateCont;
