import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CateCont from "../../components/CateCont";
import PostCard from "../../components/PostCard";
import { getCategories, getPosts } from "../../graphql/CoreQueries";

export const getServerSideProps = async () => {
  const cate = await getCategories();
  const posts = await getPosts(10, 0);
  return {
    props: { cate, posts },
  };
};

const App = ({ cate, posts }) => {
  const [postsArray, setPostsArray] = useState(posts.posts);
  const [hasMore, setHasMore] = useState(true);
  const addPosts = async () => {
    const posts = await getPosts(20, postsArray.length);
    if (posts.posts.length <= 0) {
      setHasMore(false);
      return;
    }
    setPostsArray((p) => [...p, ...posts.posts]);
  };
  return (
    <div className="min-h-[80vh] bg-transparent  w-full flex mdx:flex-col flex-wrap">
      <Head>
        <title>Snehendu Roy</title>
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
            endMessage={
              <p className="w-full text-green-600 font-bold text-center">
                You have seen it all
              </p>
            }
          >
            {postsArray.map((item, i) => (
              <PostCard data={item} key={i} style="shadow-sm bg-white" />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default App;
