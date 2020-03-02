import { neo4jgraphql } from 'neo4j-graphql-js'
import bcrypt from 'bcrypt'
import { isNil } from 'lodash'

import { createToken } from '../auth/auth'

export const resolvers = {
  Mutation: {
    RegisterUser: async (object, params, context, resolveInfo) => {
      const user = params
      user.password = await bcrypt.hash(user.password, 12)

      /**
       * IMPORTANT: How do we enforce a unique email for User nodes?
       *
       * Create constraint(s):
       * $ CREATE CONSTRAINT ON (user:User) ASSERT user.email IS UNIQUE
       * $ CREATE CONSTRAINT ON (user:User) ASSERT user.username IS UNIQUE
       *
       * To view constraints defined for your Neo4j database:
       * $ CALL db.constraints
       *
       * To view labels for a node:
       * $ MATCH (n) RETURN n, labels(n)
       */

      // Attempt to create the user account
      return neo4jgraphql(
        object,
        user,
        context,
        resolveInfo,
        // Set debug to false unless you want to see a plain text encrypted password in your log 😳
        false
      )
        .then(result => {
          return result
        })
        .catch(e => {
          // e => Neo4jError: Failed to invoke procedure `apoc.cypher.doIt`: Caused by: IndexEntryConflictException{propertyValues=( String("me@nomail.com") ), addedNodeId=-1, existingNodeId=31}
          switch (true) {
            case RegExp('existingNodeId').test(e):
              throw new Error(
                `An account already exists for this email address.`
              )
            default:
              throw new Error(
                `Whoops. We've encountered an unexpected error within our database server.`
              )
          }
        })
    },
    Login: async (object, { email, password }, context, resolveInfo) => {
      const user = await neo4jgraphql(
        object,
        { email, password },
        context,
        resolveInfo,
        // Set debug to false unless you want to see plain text passwords in your log 😳
        false
      )
      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        throw new Error('Incorrect password')
      }

      const signedToken = await createToken(
        {
          user: { id: user.id, username: user.username }
        },
        context.SECRET
      )

      return `${signedToken}`
    }
  },
  Query: {
    currentUser: async (object, params, context, resolveInfo) => {
      const userID = context.user.id
      if (isNil(userID)) {
        return null
      }

      const { id, email, username } = await neo4jgraphql(
        object,
        { user: userID },
        context,
        resolveInfo
      )

      return {
        id,
        email,
        username
      }
    }
  }
}
