# Base image
FROM node:14-alpine

# Change app directory
WORKDIR /usr/src/app

# Install app dependencies
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies
COPY package*.json ./
RUN npm install

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
COPY . .

# Expose the port
EXPOSE 3000

# default cmd to run before starting a container from this image
CMD ["yarn", "dev"]