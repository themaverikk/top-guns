# Base image
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies
COPY package*.json ./
RUN npm install
RUN npm install nodemon -g
# For production
# RUN npm ci --only=production

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
COPY . .

# Expose the port
EXPOSE 8000

# Default cmd to run before starting a container from this image
CMD ["yarn", "dev"]
