// Make sure we're using the default database if we're using Neo4j v4.0. This command will simply generate a warning if you're using Neo4j v3.5 but will still allow the Cypher script to execute as intended.
:use neo4j;

// Create constraints to prevent User nodes from having duplicate email or username values
CREATE CONSTRAINT ON ( user:User ) ASSERT user.email IS UNIQUE;
CREATE CONSTRAINT ON ( user:User ) ASSERT user.username IS UNIQUE;