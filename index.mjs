import "colors";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.mjs";
import { resolvers } from "./resolvers.mjs";

const API_PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: API_PORT })
  .then(({ url }) => {
    console.log(colors.green(`��� Server ready at ${url}`));
  })
  .catch((error) => {
    console.log(error);
  });
