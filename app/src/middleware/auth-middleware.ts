import { ApolloLink } from "apollo-link";

export const authMiddleware = new ApolloLink((operation, forward: any) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null
    }
  });

  return forward(operation);
});
