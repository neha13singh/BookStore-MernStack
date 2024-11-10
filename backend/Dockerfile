FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set environment variables
ENV PORT=8080
ENV MONGODB_URI=mongodb+srv://nehasingh134202:Neha132931@cluster0.tup3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Expose backend port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]