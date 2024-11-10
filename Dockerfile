# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json files
COPY frontend/package*.json frontend/
COPY backend/package*.json backend/

# Install dependencies
WORKDIR /app/frontend
RUN npm install

WORKDIR /app/backend
RUN npm install

# Copy project files
COPY frontend/ /app/frontend/
COPY backend/ /app/backend/

# Build frontend
WORKDIR /app/frontend
RUN npm run build

# Expose ports
EXPOSE 3000 8080

# Create start script
WORKDIR /app
COPY start.sh .
RUN chmod +x start.sh

# Start the application
CMD ["./start.sh"]