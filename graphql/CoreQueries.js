import request, { gql } from "graphql-request";

export const getPostQuery = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
        categories {
          slug
          title
        }
        title
        comments(orderBy: createdAt_DESC) {
          name
          content
        }
        fetauredImage {
          url
        }
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
