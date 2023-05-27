# Use the official Node.js image as the base image
FROM node:18.16.0-alpine

ENV NODE_ENV=production
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci 

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 8080

# Start the application
CMD ["npm", "start"]