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

# Create start script that runs both servers
WORKDIR /app
RUN echo '#!/bin/sh\n\
cd /app/backend && node healthcheck.js & \n\
cd /app/backend && PORT=8080 node index.js' > start.sh && \
chmod +x start.sh

# Expose ports
EXPOSE 3000 8080

# Start the application
CMD ["./start.sh"]