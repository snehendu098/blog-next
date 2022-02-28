import moment from "moment";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { submitComment } from "../graphql/CoreQueries";

const Article = ({ post }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const content = post?.content;

  const handleSubmit = () => {
    if (!name || !email || !comment) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    submitComment({ name, email, content: comment, slug: post.slug })
      .then((e) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        setComment("");
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <>
      {/* post */}
      <div className="items-center flex flex-col p-5 rounded-md w-[65%] mdx:w-full article-glassmorphism">
        <div className="w-full">
          <img
            src={post?.featuredImage?.url}
            alt="Image"
            className="w-full rounded-md mdx:w-full mb-5"
          />

          {/* date */}
          <div className="w-full">
            <div className="flex items-center">
              <p className="flex bg-yellow-300 shadow-lg p-3 rounded-full text-black justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-pink-600 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {moment(post?.createdAt).format("DD-MM-YYYY")}
              </p>
            </div>
          </div>

          <p className="text-4xl mt-3 capitalise font-bold my-1">
            {post?.title}
          </p>

          <div className="w-full mb-4">
            <div className="flex">
              {post?.categories.map((item, i) => (
                <p
                  key={i}
                  className="text-sm p-[2px] px-3 mr-2  rounded-full bg-pink-400 shadow-lg"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>

          {/* markdown */}
          <p className="prose text-black prose-lg prose-headings:text-2xl min-w-full prose-p:text-xl  prose-headings:decoration-yellow-500">
            <ReactMarkdown>{content}</ReactMarkdown>
          </p>
        </div>
      </div>

      {/* leave a reply */}
      <div className="mdx:w-full w-[65%] mt-3 article-glassmorphism p-3 rounded-md">
        <p className="text-2xl mb-2 font-bold text-black">Leave a Comment</p>
        {error && (
          <>
            <p className="text-red-500 text-2xl font-bold">An error occurred</p>
          </>
        )}
        {success && (
          <>
            <p className="text-green-500 text-2xl font-bold">
              Comment submitted and will be available after review
            </p>
          </>
        )}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white p-3 my-3 w-full text-black focus:text-gray-700 focus:border focus:border-blue-600 focus:outline-none rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          className="bg-white p-3 mb-3 w-full text-black focus:text-gray-700 focus:border focus:border-blue-600 focus:outline-none rounded-md"
        />
        <textarea
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter Your comment"
          className="bg-white p-3 w-full text-black focus:text-gray-700 focus:border focus:border-blue-600 focus:outline-none rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 p-3 px-5 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* comments */}
      {post.comments.length > 0 && (
        <div className="mdx:w-full w-[65%] mt-3 article-glassmorphism p-3 rounded-md">
          {post?.comments?.map((item, indx) => {
            return (
              <div
                key={indx}
                id="create-color"
                className={`text-black p-3 border-l-4 border-l-blue-400 my-5`}
              >
                <p className="text-xl font-bold uppercase">{item.name}</p>
                <p className="text-sm">{item.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Article;
