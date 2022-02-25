import Image from "next/image";
import React from "react";
import pic from "../assets/abrrj.jpg";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";

const IntroComponent = () => {
  return (
    <div className="w-full bg-slate-800 blue-glassmorphism mdx:flex-col mdx:justify-center mdx:items-center mt-2 flex md:flex-row-reverse shadow-md">
      <div className="w-1/2 flex items-center justify-center p-10 mdx:mt-3 mdx:p-0">
        <Image
          src={pic}
          alt="hello"
          height={200}
          width={200}
          className="rounded-full"
        />
      </div>
      <div className="md:w-1/2 p-2 m-2 mdx:p-1">
        <p className="text-6xl mt-3 p-7 mdx:mt-0 mdx:p-5 mdx:text-4xl font-bold">
          Hello Friends, I am <span className="text-blue-500">Snehendu</span>
        </p>
        <p className="text-3xl p-7 mdx:p-5 mdx:pt-0 mdx:text-xl">
          A programmer with entrepreneurship goals. Here, I will share my
          learnings through{" "}
          <Link href={"/articles"}>
            <span className="text-blue-500 cursor-pointer font-bold">
              ARTICLES
            </span>
          </Link>
        </p>
        <div className="flex px-7 text-4xl mdx:p-5">
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

export default IntroComponent;
