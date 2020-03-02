// Apollo and GraphQL imports
import { ApolloClient } from 'apollo-client';
import { concat } from "apollo-link";
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Middleware
import { authMiddleware } from '../../middleware/auth-middleware';

// Constants
const GRAPHQL_URI = 'http://localhost:8000/graphql'
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI || GRAPHQL_URI
});

// Create the Apollo client
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});
