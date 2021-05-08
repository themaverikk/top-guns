# Base image
FROM node:14-alpine

# Change app directory
WORKDIR /usr/local/app

# Install all dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose the port
EXPOSE 3000

CMD ["yarn", "dev"]