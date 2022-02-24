import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { links } from "../links";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-md sticky w-full z-10 bg-white">
        <div className="w-full">
          <div className="flex items-center h-12 w-full">
            <div className="flex items-center  mx-10  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Snehendu<span className="text-blue-500">Roy</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {item.name}
                      </div>
                    </Link>
                  ))}

                  <Link href={"mailto:roysnehendu1029@gmail.com"}>
                    <div className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
                      Contact
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center mr-5">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="md:hidden absolute w-full shadow-md bg-white"
            id="mobile-menu"
          >
            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </div>
                </Link>
              ))}

              <Link href={"mailto:roysnehendu1029@gmail.com"}>
                <div
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
