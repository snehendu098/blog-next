import React from "react";
import ArticleComponent from "../../components/ArticleComponent";
import { getCategories } from "../../graphql/CoreQueries";

export const getServerSideProps = async () => {
  const data = await getCategories(5);
  return {
    props: { data },
  };
};

const App = ({ data }) => {
  console.log(data);
  return (
    <div className="min-h-[80vh]">
      <p className="w-full text-center text-2xl font-bold my-2">
        Checkout my Articles
      </p>
      <div className=" flex mdx:flex-col flex-wrap items-center justify-center">
        {data?.categories.map((item, index) => {
          return <ArticleComponent data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
