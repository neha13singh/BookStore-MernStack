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
ENV PORT=8080
ENV HOST=0.0.0.0
ENV VITE_API_URL=http://localhost:8080

# Create start script
WORKDIR /app
RUN echo '#!/bin/sh\n\
cd /app/backend && node index.js & \n\
cd /app/frontend && HOST=0.0.0.0 npm run dev' > start.sh && \
chmod +x start.sh

# Expose ports
EXPOSE 5173 8080

# Start the application
CMD ["./start.sh"]