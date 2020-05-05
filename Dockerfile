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

# The actual server, this builds the final image
FROM abiosoft/caddy

# Copy the caddy configuration
COPY ./config/Caddyfile /etc/Caddyfile

# Copy the output of the builder
COPY --from=builder /usr/src/app/dist /srv

# Inform Docker to listen on port 443 and 80
EXPOSE 80 443