# Use the NodeJS image as builder
FROM node:alpine AS builder

# Create the workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the package file and source code
COPY package.json /usr/src/app
COPY . ./

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# The nginx server, this builds the final image
FROM linuxserver/letsencrypt

# Copy the nginx configuration
COPY nginx.conf /config

# Copy the output of the builder
COPY --from=builder /usr/src/app/dist /config/www

# Inform Docker to listen on port 443 and 80
EXPOSE 443 80