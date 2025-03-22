# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose React's default port (adjust based on Vite or CRA)
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
