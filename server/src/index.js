import {
  DEFAULT_GRAPHQL_PORT,
  DEFAULT_GRAPHQL_URI,
  DEFAULT_JWT_SECRET
} from './config/constants'

import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { driver as neo4j } from './config/neo4j'
import { schema } from './graphql/graphql-schema'
import { injectUser } from './middleware/inject-user'

// Graph our environment variables from our .env file and create a variable for our JWT secret
dotenv.config()
export const SECRET = process.env.JWT_SECRET || DEFAULT_JWT_SECRET

// Create express app
export const app = express()

// Add Middleware to our Express server
app.use(cors())
app.use(injectUser)

// Create a new apollo server and pass in the Neo4j Driver, JWT Secret, and User object into the server as Context
const server = new ApolloServer({
  context: ({ req }) => ({
    driver: neo4j(
      process.env.NEO4J_URI,
      process.env.NEO4J_USER,
      process.env.NEO4J_PASSWORD
    ),
    SECRET,
    user: req.user || null
  }),
  schema
})

// Applying middleware to the newly created Apollo Server and specify a queriable path (also where Graphiql will display in browser)
server.applyMiddleware({ app, path: '/graphql' })

// Open up a port and start the server on it
app.listen({ port: process.env.GRAPHQL_PORT || DEFAULT_GRAPHQL_PORT }, () => {
  console.log(
    `🚀 Server live at ${process.env.GRAPHQL_URI || DEFAULT_GRAPHQL_URI} 🚀`
  )
})
