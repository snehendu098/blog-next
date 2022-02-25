import request, { gql } from "graphql-request";

export const getPosts = async (pagination) => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC, first: ${pagination}) {
        title
        categories {
          slug
          title
        }
        fetauredImage {
          url
        }
        description
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories(orderBy: createdAt_DESC) {
        createdAt
        title
        slug
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);
  return res;
};
