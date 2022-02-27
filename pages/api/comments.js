// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_GRAPH_ENDPOINT;

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_API}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $content: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          content: $content
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    slug: req.body.slug,
    content: req.body.content,
  });

  return res.status(200).send(result);
}
