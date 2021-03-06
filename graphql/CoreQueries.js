import request, { gql } from "graphql-request";

export const getPosts = async (first, skip) => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC, first: ${first || 0}, skip: ${skip || 0}) {
        title
        categories {
          slug
          title
        }
        featuredImage {
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

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories(orderBy: createdAt_DESC) {
        slug
        title
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
        slug
        featuredImage {
          url
        }
        categories {
          title
          slug
        }
        comments {
          content
          name
        }
      }
    }
  `;

  const res = await request(process.env.NEXT_PUBLIC_GRAPH_ENDPOINT, query);

  return res;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result.json();
};

export const getPostsbyCategory = async (pagination, skip, slug) => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC, first: ${pagination}, skip: ${skip}, where: {categories_some: {slug: "${slug}"}}) {
        title
        categories {
          slug
          title
        }
        featuredImage {
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
