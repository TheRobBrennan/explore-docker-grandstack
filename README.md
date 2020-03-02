# Welcome

This GRANDStack ([GraphQL](https://graphql.org), [React](https://reactjs.org), [Apollo](https://www.apollographql.com), [Neo4j Database](https://neo4j.com)) example contains built-in local authentication against a Neo4j back-end database - originally inspired by existing work from [@erikrahm](https://github.com/erikrahm) in the repo [https://github.com/erikrahm/grand-stack-seed](https://github.com/erikrahm/grand-stack-seed) - and is meant to serve as a starting point for exploring the [GRANDstack](https://grandstack.io/docs/getting-started-neo4j-graphql.html) using [Docker](https://www.docker.com).

## Initial setup

To run this example, all you need to have installed on your system is [Docker](https://www.docker.com) and `npm` installed on your development system - which is automatically included if you downloaded and installed [Node.js](https://nodejs.org/).

If you do not have [Docker](https://www.docker.com) installed on your development system, The easiest way to use this repo is to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and configured on your development machine.

If you already have `npm` and [Docker](https://www.docker.com) installed on your development system, please continue to "Running the example"

### Running the example

If you already have `npm` and [Docker](https://www.docker.com) installed on your development system, simply run:

```sh
$ npm run start
```

This will create the services identified by `docker-compose.yml` - which includes a [Neo4j](https://neo4j.com) database server, a [GraphQL](https://graphql.org) back-end powered by [Express](https://expressjs.com) and [Apollo](https://www.apollographql.com), and a [GraphQL](https://graphql.org) web application built with [create-react-app](https://create-react-app.dev) and [Apollo](https://www.apollographql.com).

#### Additional scripts

This project also includes the following additional scripts for working with Docker:

+ "docker:build"
+ "docker:stop"
+ "docker:nuke"

To run these scripts, you just need to run `npm run <script>` from the root level of this project.

##### docker:build

This is the script you would want to run if you've made any changes to Docker infrastructure files, such as modifications to `docker-compose.yml`, `Dockerfile`, etc.

##### docker:stop

This is the script you would want to run if you want to stop all of the Docker services and containers that are running for this project.

If you have stopped services and containers, you can start them again with `npm run docker:start`

##### docker:nuke

This is a convenient tool that can have drastic consequences. If you would like to destroy **ALL** Docker images, containers, volumes, and networks on your system - **for all projects, not just this one** - this is the script for you.

Be careful!
