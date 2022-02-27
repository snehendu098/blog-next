import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="p-2 w-full bg-footer  bottom-0 font-bold border-t border-blue-500 flex items-center justify-center relative">
      <div className="w-1/2 text-center smx:text-sm">
        &#169; Created By{" "}
        <Link href={"/"}>
          <span className="text-blue-500 cursor-pointer">Snehendu Roy</span>
        </Link>
      </div>
      <div className="w-1/3">
        <div className="flex p-3 text-4xl mdx:p-5">
          <div className="hover:text-blue-500 cursor-pointer">
            <AiFillTwitterCircle />
          </div>
          <div className="hover:text-slate-900 cursor-pointer">
            <AiFillGithub />
          </div>
          <div className="hover:text-red-600 cursor-pointer">
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
