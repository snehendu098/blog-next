import React from "react";
import { getCategories } from "../graphql/CoreQueries";

const Header = () => {
  const getPosts = async () => {
    const res = await getCategories();
    console.log(res);
  };

  getPosts();

  return (
    <div className="p-3 bg-clip-padding backdrop-filter backdrop-blur-xl border-b top-0 sticky bg-opacity-60  border-gray-700 flex items-center ">
      <p className="font-bold text-xl w-2/5">
        Snehendu<span className="text-[gold]">Roy</span>
      </p>
      <div className="w-3/5 flex flex-row-reverse">
        <p className="font-bold rounded-lg cursor-pointer p-2 hover:bg-[gold] hover:text-black transform duration-700">
          Hello
        </p>
      </div>
    </div>
  );
};

export default Header;
