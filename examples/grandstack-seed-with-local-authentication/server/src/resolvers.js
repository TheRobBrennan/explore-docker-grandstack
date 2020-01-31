import { neo4jgraphql } from "neo4j-graphql-js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { pick, isNil } from "lodash";

import { createToken } from "./auth/auth";

export const resolvers = {
  Mutation: {
    RegisterUser: async (object, params, context, resolveInfo) => {
      const user = params;
      user.password = await bcrypt.hash(user.password, 12);
      return neo4jgraphql(object, user, context, resolveInfo, true);
    },
    Login: async (object, { email, password }, context, resolveInfo) => {
      const user = await neo4jgraphql(
        object,
        { email, password },
        context,
        resolveInfo,
        // Set debug to false unless you want to see plain text passwords in your log 😳
        false
      );
      if (!user) {
        throw new Error("No user with that email");
        return null;
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Incorrect password");
        return null;
      }

      const signedToken = await createToken(
        {
          user: { id: user.id, username: user.username }
        },
        context.SECRET
      );

      return `${signedToken}`;
    }
  },
  Query: {
    currentUser: async (object, params, context, resolveInfo) => {
      const userID = context.user.id;
      if (isNil(userID)) {
        return null;
      }

      const { id, email, username } = await neo4jgraphql(
        object,
        { user: userID },
        context,
        resolveInfo
      );

      return {
        id,
        email,
        username
      };
    }
  }
};
