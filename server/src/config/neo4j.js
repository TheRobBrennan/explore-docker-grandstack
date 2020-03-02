import { v1 as neo4j } from "neo4j-driver";

export const DEFAULT_NEO4J = {
  URI: "bolt://localhost:7687",
  USER: "neo4j",
  PASSWORD: "neo4j",
}

// Create a configured neo4j driver instance (this doesn't start a session)
export const driver = (uri, user, password) => neo4j.driver(
  uri || DEFAULT_NEO4J.URI,
  neo4j.auth.basic(
    user || DEFAULT_NEO4J.USER,
    password || DEFAULT_NEO4J.PASSWORD,
  )
);
