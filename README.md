# Welcome

This project is meant to serve as a starting point for exploring the [GRANDstack](https://grandstack.io/docs/getting-started-neo4j-graphql.html) - GraphQL, React, Apollo, and Neo4j - using [Docker](https://www.docker.com).

## Initial setup

### Docker

The easiest way to use this repo is to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and configured on your development machine.

## Additional examples

### Example: Using Neo4j for local user authentication

Based on my project at [https://github.com/TheRobBrennan/grandstack-seed](https://github.com/TheRobBrennan/grandstack-seed), you can run this example project on your development machine to see how simple user account creation and authentication can work with a Neo4j database.

Please verify you have set up your development environment correctly by reading `examples/grandstack-seed-with-local-authentication/README.md` - and then you can run:

```sh
$ npm run start:example-with-local-authentication
> explore-docker-grandstack@0.0.0 start:example-with-local-authentication /Users/rob/repos/explore-docker-grandstack
> cd examples/grandstack-seed-with-local-authentication && npm run start


> grandstack-seed@0.0.0 start /Users/rob/repos/explore-docker-grandstack/examples/grandstack-seed-with-local-authentication
> npx concurrently "cd server && npm start" "cd client && npm start"

npx: installed 54 in 3.664s
[0] 
[0] > grand-server@0.0.0 start /Users/rob/repos/explore-docker-grandstack/examples/grandstack-seed-with-local-authentication/server
[0] > nodemon --exec babel-node src/index.js
[0] 
[1] 
[1] > grand-stack-seed-client@0.0.0 start /Users/rob/repos/explore-docker-grandstack/examples/grandstack-seed-with-local-authentication/client
[1] > react-scripts start
[1] 
[0] [nodemon] 1.18.10
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching: *.*
[0] [nodemon] starting `babel-node src/index.js`
[1] Starting the development server...
[1] 
[0] 🚀 Server live at http://localhost:8000 🚀
[1] Compiled successfully!
[1] 
[1] The app is running at:
[1] 
[1]   http://localhost:3000/
[1] 
[1] Note that the development build is not optimized.
[1] To create a production build, use yarn run build.
[1] 
```

Visit [http://localhost:3000/register](http://localhost:3000/register) to create a new account.
Visit [http://localhost:3000/login](http://localhost:3000/login) to login with an account.
