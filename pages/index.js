import Head from "next/head";
import IntroComponent from "../components/IntroComponent";
import PostComponent from "../components/PostComponent";
import { getPosts } from "../graphql/CoreQueries";

export const getServerSideProps = async () => {
  const res = await getPosts(3, 0);
  return {
    props: { data: res },
  };
};

export default function Home({ data }) {
  // console.log(data);
  return (
    <div className="min-h-[80vh]">
      <Head>
        <title>Snehendu Roy</title>
        <meta
          name="keywords"
          content="Programming, Entrepreneurship, Knowledge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroComponent />
      <p className="text-center text-2xl font-bold mt-2">Recent Articles</p>
      <PostComponent data={data} />
    </div>
  );
}
