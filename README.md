# Welcome

This GRANDStack ([GraphQL](https://graphql.org), [React](https://reactjs.org), [Apollo](https://www.apollographql.com), [Neo4j Database](https://neo4j.com)) example contains built-in local authentication against a Neo4j back-end database - originally inspired by existing work from [@erikrahm](https://github.com/erikrahm) in the repo [https://github.com/erikrahm/grand-stack-seed](https://github.com/erikrahm/grand-stack-seed) - and is meant to serve as a starting point for exploring the [GRANDstack](https://grandstack.io/docs/getting-started-neo4j-graphql.html) using [Docker](https://www.docker.com).

SCREENSHOT: Loading `/` redirects to the `/login` page
![screenshots/screenshot-00.png](screenshots/screenshot-00.png)

SCREENSHOT: Attempting to login against an empty database
![screenshots/screenshot-01.png](screenshots/screenshot-01.png)

SCREENSHOT: Creating a new account
![screenshots/screenshot-02.png](screenshots/screenshot-02.png)

SCREENSHOT: Ready to login!
![screenshots/screenshot-03.png](screenshots/screenshot-03.png)

SCREENSHOT: View after successfully authenticating
![screenshots/screenshot-04.png](screenshots/screenshot-04.png)

SCREENSHOT: View after successfully authenticating with the authorization token in local storage
![screenshots/screenshot-05.png](screenshots/screenshot-05.png)

SCREENSHOT: View after logging out - note that the authorization token is no longer present
![screenshots/screenshot-06.png](screenshots/screenshot-06.png)

SCREENSHOT: View of our graph database in Neo4j Browser
![screenshots/screenshot-07.png](screenshots/screenshot-07.png)

SCREENSHOT: View of the sample JWT token
![screenshots/screenshot-08.png](screenshots/screenshot-08.png)

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

#### Useful URLs

Once your Dockerized example is up and running, here are some useful URLs:

+ [http://localhost:3000/](http://localhost:3000/) - This is the React front-end web application
+ [http://localhost:8000/graphql](http://localhost:8000/graphql) - This is the GraphiQL IDE you can use to interact with your GraphQL back-end server
  + Since we are using protected routes for our GraphQL server, you will need to pass a valid authorization token in the `HTTP Headers` section such as:
  ```json
  {
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZWQ5ZmVlZTgtZjdlZi00NTIxLWIwOWQtNGU5OTNlYjk5MDEwIiwidXNlcm5hbWUiOiJ0aGVyb2JicmVubmFuIn0sImlhdCI6MTU4MzExMTA2OCwiZXhwIjoxNTgzNzE1ODY4fQ.mMq9QCpXLtsGNb0HWMszz9gAD-c8rjidVVZku3geEQQ"
  }
  ```
    + To find a valid token, make sure you have registered and logged in with an account, and then view your browser development tools to find the token stored in your local storage.
      + Curious what's inside that magic JWT token? Check out [https://jwt.io](https://jwt.io) and paste it in to find out.
+ [http://localhost:7474/browser/](http://localhost:7474/browser/) - This is the Neo4j Browser that will allow you to interact with your Neo4j server
