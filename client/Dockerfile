# Use the official Node.js image as the base image
FROM node:14.16.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./


# Install dependencies (cache npm packages)
# RUN npm install --legacy-peer-deps

# RUN npm install pm2 -g

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app runs on (e.g., 3000 for React)
# EXPOSE 5173

# Start the app using npm run dev
CMD ["npm", "run", "dev"]
