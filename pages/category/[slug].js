import { useRouter } from "next/router";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CateCont from "../../components/CateCont";
import Loader from "../../components/Loader";
import PostCard from "../../components/PostCard";
import { getCategories, getPostsbyCategory } from "../../graphql/CoreQueries";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await getCategories();
  const paths = res.categories.map((cate) => ({
    params: { slug: cate.slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getPostsbyCategory(10, 0, slug);
  const cate = await getCategories();

  return {
    props: {
      posts,
      cate,
      slug,
    },
  };
}

const App = ({ cate, posts, slug }) => {
  if (!cate || !posts || !slug) return null;

  const postsArray = posts.posts;
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const addPosts = async () => {
    const posts = await getPostsbyCategory(5, postsArray.length, slug);
    if (posts.posts.length <= 0) {
      setHasMore(false);
      return;
    }
    postsArray.push(posts.posts);
  };

  if (router.isFallback) {
    return <Loader />;
  } else {
    return (
      <div className="min-h-[80vh] bg-transparent  w-full flex cond:flex-col flex-wrap">
        <Head>
          <title>Snehendu Roy | Categories</title>
          <meta
            name="keywords"
            content="Programming, Entrepreneurship, Knowledge"
          />
        </Head>
        <div className="w-[25%] flex justify-center bg-transparent  mdx:w-full">
          {/* categories */}
          <CateCont cate={cate} />
        </div>
        <div className="w-[75%] mdx:w-full p-3 flex flex-wrap">
          <div className="w-full">
            <InfiniteScroll
              dataLength={postsArray.length}
              next={addPosts}
              className="flex w-full mdx:flex-col flex-wrap"
              hasMore={hasMore}
              loader={
                <p className="text-xl font-bold text-blue-900 w-full text-center">
                  Loading posts
                </p>
              }
              endMessage={
                <p className="text-xl font-bold text-blue-900 w-full text-center">
                  You have reached the end of all posts
                </p>
              }
            >
              {postsArray.map((item, i) => (
                <PostCard data={item} style="shadow-sm bg-white" key={i} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
