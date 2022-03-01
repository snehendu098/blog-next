import React from "react";
import { generatePages, getSinglePost } from "../../graphql/CoreQueries";
import Article from "../../components/Article";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import Head from "next/head";

const App = ({ data }) => {
  if (!data) return null;
  const router = useRouter();
  const post = data?.post;

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center text-white">
      <Head>
        <title>Snehendu Roy | Post </title>
      </Head>
      <Article post={post} />
    </div>
  );
};

// tell next how many pages
export const getStaticPaths = async () => {
  const res = await generatePages();
  const paths = res.posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: true,
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
