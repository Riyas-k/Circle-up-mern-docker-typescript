# Use the official Node.js image as the base image
FROM node:18.16.0

# Set the working directory
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY  package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD [ "npm","run","dev" ]
