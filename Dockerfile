# Use an official Node.js runtime as the base image
FROM node:16.19.0-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the React app (if needed)
RUN npm run build

# Expose the port that the React app will run on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
