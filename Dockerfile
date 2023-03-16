# Specify the Node.js version
FROM node:16.17.1-alpine3.15

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy the rest of the application code to the working directory
COPY . .

RUN apk add --no-cache jq && jq '.host = "host.docker.internal"' db.config.json > tmp.json && mv tmp.json db.config.json

# Build the application
RUN yarn build:clean

# Expose the port on which the application listens
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
