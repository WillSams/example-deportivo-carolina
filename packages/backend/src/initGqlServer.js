import { ApolloServer, ApolloError } from 'apollo-server-express';
import { typeDefs } from './typeDefs.js';
import resolvers from './resolvers/index.js';

const initGqlServer = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      if (req?.headers?.authorization !== `Bearer ${process.env.TOKEN_SECRET}`) {
        const message = 'You are not authorized to make requests to this API\'s GraphQL endpoints';
        throw new ApolloError(message, null);
      }
    },
    formatError: (err) => err.message,
    debug: process.env.NODE_ENV !== 'production',
  });

  await server.start();

  const apolloRegistration = {
    app,
    path: '/api/graphql',
    cors: true,
    bodyParserConfig: true,
  };
  server.applyMiddleware(apolloRegistration);
};

export default initGqlServer;
