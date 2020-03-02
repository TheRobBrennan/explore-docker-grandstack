FROM node:12-alpine

# Create a directory for our app
RUN mkdir -p /app
WORKDIR /app

COPY package.json .

# -- START BCRYPT FIX --
# IMPORTANT: A common problem with bcrypt is that if the developer is using a different OS than
# that of the Docker container, bcrypt will be compiled against the host OS and not the containerized OS.
#
# One fix for that is to install dependencies to force a build of bcrypt and then immediately remove
# it to keep the image small.
#
# Source https://www.richardkotze.com/top-tips/install-bcrypt-docker-image-exclude-host-node-modules

# Install the prerequisites to build bcrypt
RUN apk add --no-cache make gcc g++ python

# Install dependencies for the app
RUN npm install

# Rebuild bcrypt from source
RUN npm rebuild bcrypt --build-from-source

# Remove the prerequisites to build bcrypt
RUN apk del make gcc g++ python

# -- END BCRYPT FIX --

# Copy application files to Docker image
COPY . .

EXPOSE 4001

CMD ["npm", "start"]
