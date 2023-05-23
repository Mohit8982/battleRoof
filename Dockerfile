# Specify the base image with the latest Node.js version
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package*.json yarn.lock ./

# Install production dependencies using Yarn
RUN yarn
RUN yarn add redis
RUN yarn install --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["node", "./bin/www"]
