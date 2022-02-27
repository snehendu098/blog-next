import React from "react";
import { generatePages, getSinglePost } from "../../graphql/CoreQueries";
import ReactMarkdown from "react-markdown";

const App = ({ data }) => {
  const post = data?.post;
  const content = post?.content;
  return (
    <div className="w-full flex items-center justify-center text-white">
      <div className="items-center flex flex-col p-5 rounded-md w-[65%] article-glassmorphism">
        <img
          src={post?.fetauredImage?.url}
          alt="Image"
          className="w-full rounded-md mdx:w-full"
        />
        <p className="text-4xl my-5  capitalise font-bold">{post?.title}</p>
        <p className="prose text-black prose-lg prose-blockquote:font-bold prose-headings:text-3xl min-w-full prose-p:text-xl prose-headings:underline prose-headings:decoration-yellow-500">
          <ReactMarkdown>{content}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

// tell next how many pages
export const getStaticPaths = async () => {
  const res = await generatePages();
  const paths = res.posts.map((post) => ({
    params: { slug: post.slug },
  }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
};

// fetch for each
export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await getSinglePost(slug);

  return {
    props: { data: data },
  };
};

export default App;
