# Welcome

This GRANDStack ([GraphQL](https://graphql.org), [React](https://reactjs.org), [Apollo](https://www.apollographql.com), [Neo4j Database](https://neo4j.com)) example contains built-in local authentication against a Neo4j back-end database - originally inspired by existing work from [@erikrahm](https://github.com/erikrahm) in the repo [https://github.com/erikrahm/grand-stack-seed](https://github.com/erikrahm/grand-stack-seed) - and is meant to serve as a starting point for exploring the [GRANDstack](https://grandstack.io/docs/getting-started-neo4j-graphql.html) using [Docker](https://www.docker.com).

## Initial setup

To run this example, all you need to have installed on your system is [Docker](https://www.docker.com) and `npm` installed on your development system - which is automatically included if you downloaded and installed [Node.js](https://nodejs.org/).

If you do not have [Docker](https://www.docker.com) installed on your development system, The easiest way to use this repo is to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and configured on your development machine.

If you already have `npm` and [Docker](https://www.docker.com) installed on your development system, please continue to "Running the example"

### Running the example

Before running this example, please fire up the [Neo4j Browser](http://localhost:7474/browser/). Once you have authenticated (using `neo4j` as the user and `letmein` as the password), please copy and paste the Cypher script at `server/src/scripts/seedDb.cypher` and run it:

![screenshots/screenshot-09.png](screenshots/screenshot-09.png)
![screenshots/screenshot-10.png](screenshots/screenshot-10.png)
![screenshots/screenshot-11.png](screenshots/screenshot-11.png)
![screenshots/screenshot-12.png](screenshots/screenshot-12.png)
![screenshots/screenshot-13.png](screenshots/screenshot-13.png)

If you already have `npm` and [Docker](https://www.docker.com) installed on your development system, simply run:

```sh
# Start the project
$ npm run start       # Uses Neo4j v3.5
$ npm run start:v4.0  # Uses Neo4j v4.0

# Build the Docker infrastructure from scratch
$ npm run build       # Uses Neo4j v3.5
$ npm run build:v4.0  # Uses Neo4j v4.0

# Stop the Docker containers from running
$ npm run stop       # Uses Neo4j v3.5
$ npm run stop:v4.0  # Uses Neo4j v4.0

# Destroy all Docker containers, images, volumes, and networks
$ npm run docker:nuke
```

This will create the services identified by `docker-compose.yml` - which includes a [Neo4j](https://neo4j.com) database server, a [GraphQL](https://graphql.org) back-end powered by [Express](https://expressjs.com) and [Apollo](https://www.apollographql.com), and a [GraphQL](https://graphql.org) web application built with [create-react-app](https://create-react-app.dev) and [Apollo](https://www.apollographql.com).

![screenshots/screenshot-00.png](screenshots/screenshot-00.png)
![screenshots/screenshot-01.png](screenshots/screenshot-01.png)
![screenshots/screenshot-02.png](screenshots/screenshot-02.png)
![screenshots/screenshot-03.png](screenshots/screenshot-03.png)
![screenshots/screenshot-04.png](screenshots/screenshot-04.png)
![screenshots/screenshot-05.png](screenshots/screenshot-05.png)
![screenshots/screenshot-06.png](screenshots/screenshot-06.png)
![screenshots/screenshot-07.png](screenshots/screenshot-07.png)

### Useful URLs

Once your Dockerized example is up and running, here are some useful URLs:

+ [http://localhost:3000/](http://localhost:3000/) - This is the React front-end web application
+ [http://localhost:8000/graphql](http://localhost:8000/graphql) - This is the GraphiQL IDE you can use to interact with your GraphQL back-end server
  + Since we are using protected routes for our GraphQL server, you will need to pass a valid authorization token in the `HTTP Headers` section such as:
  ```json
  {
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZWQ5ZmVlZTgtZjdlZi00NTIxLWIwOWQtNGU5OTNlYjk5MDEwIiwidXNlcm5hbWUiOiJ0aGVyb2JicmVubmFuIn0sImlhdCI6MTU4MzExMTA2OCwiZXhwIjoxNTgzNzE1ODY4fQ.mMq9QCpXLtsGNb0HWMszz9gAD-c8rjidVVZku3geEQQ"
  }
  ```
    ![screenshots/screenshot-14.png](screenshots/screenshot-14.png)
    + To find a valid token, make sure you have registered and logged in with an account, and then view your browser development tools to find the token stored in your local storage.
      + Curious what's inside that magic JWT token? Check out [https://jwt.io](https://jwt.io) and paste it in to find out.
      ![screenshots/screenshot-08.png](screenshots/screenshot-08.png)
+ Neo4j Browser - This is the Neo4j Browser that will allow you to interact with your Neo4j database server
  + `Neo4j v3.5` - [http://localhost:7474/browser/](http://localhost:7474/browser/)
  + `Neo4j v4.0` - [http://0.0.0.0:7474/browser/](http://0.0.0.0:7474/browser/)
