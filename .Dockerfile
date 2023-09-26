# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port where your frontend application runs (e.g., 3000 for React)
EXPOSE 5173

# Command to start your frontend application
CMD ["npm", "start"]