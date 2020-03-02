// Create constraints to prevent User nodes from having duplicate email or username values
CREATE CONSTRAINT ON ( user:User ) ASSERT user.email IS UNIQUE;
CREATE CONSTRAINT ON ( user:User ) ASSERT user.username IS UNIQUE;