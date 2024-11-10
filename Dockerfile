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

# Set environment variables
ENV PORT=3000
ENV HOST=0.0.0.0
ENV VITE_API_URL=http://localhost:3000

# Create start script
WORKDIR /app
RUN echo '#!/bin/sh\n\
cd /app/backend && PORT=3000 node index.js & \n\
cd /app/frontend && PORT=3000 HOST=0.0.0.0 npm run dev' > start.sh && \
chmod +x start.sh

# Expose port
EXPOSE 3000

# Start the application
CMD ["./start.sh"]