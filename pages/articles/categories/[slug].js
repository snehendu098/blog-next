import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CateCont from "../../../components/CateCont";
import PostCard from "../../../components/PostCard";
import {
  getCategories,
  getPostsbyCategory,
} from "../../../graphql/CoreQueries";

export const getStaticPaths = async () => {
  const res = await getCategories();
  const paths = res.categories.map((cate) => ({
    params: { slug: cate.slug },
  }));
  //   console.log(paths);

  return {
    paths: paths,
    fallback: false,
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
  const [postsArray, setPostsArray] = useState(posts.posts);
  const [hasMore, setHasMore] = useState(true);
  // console.log(postsArray);

  const addPosts = async () => {
    const posts = await getPostsbyCategory(20, postsArray.length, slug);
    if (posts.posts.length <= 0) {
      setHasMore(false);
      return;
    }
    setPostsArray((p) => [...p, ...posts.posts]);
  };

  return (
    <div className="min-h-[80vh] bg-transparent  w-full flex cond:flex-col flex-wrap">
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
            {postsArray.map((item) => (
              <PostCard data={item} style="shadow-sm bg-white" />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default App;
