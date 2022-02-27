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
        slug
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};

export const generatePages = async () => {
  const query = gql`
    query MyQuery {
      posts {
        slug
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};

export const getCategories = async (pagination) => {
  const query = gql`
    query MyQuery {
      categories(orderBy: createdAt_DESC) {
        slug
        title
        post(first: ${pagination})  {
          title
          description
          slug
        }
        createdAt
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};

export const getSinglePost = async (slug) => {
  const query = gql`
    query MyQuery {
      post(where: { slug: "${slug}" }) {
        title
        content
        createdAt
        description
        fetauredImage {
          url
        }
        categories {
          title
          slug
        }
        comments {
          name
          email
          content
          createdAt
        }
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};
