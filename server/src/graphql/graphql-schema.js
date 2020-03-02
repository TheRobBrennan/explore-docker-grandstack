import { makeAugmentedSchema } from 'neo4j-graphql-js'
import { typeDefs } from './typedefs'
import { resolvers } from './resolvers'

// Create a schema out of our typedefs and resolvers
// Alter query and mutation flags for auto generation by neo4j-graphql-js
export const schema = makeAugmentedSchema({
  typeDefs,
  resolvers,
  config: {
    // Set to true if you want neo4j-graphql-js to automatically generate queries based on your schema
    query: false,
    // Set to true if you want neo4j-graphql-js to automatically generate mutations based on your schema
    mutation: false
  }
})
