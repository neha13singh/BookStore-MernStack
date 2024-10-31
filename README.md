# 📚 Bookstore

A web application for managing a bookstore, displaying book details such as title, author, publishing year, and summary. Built using MongoDB, Express.js, React, Node.js (MERN stack), and styled with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## ✨ Features

- Display list of books with detailed information
- Add new books to the collection
- Edit book information
- Delete books from the collection

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository and Install Dependencies:**

   ```bash
   # Clone the repository
   git clone "copy code from codes"
   cd bookstore

   # Install backend dependencies
   cd backend
   npm install

   # Set up environment variables
   echo "MONGODB_URI=your_mongodb_connection_string" > .env
   echo "PORT=8080" >> .env

   # Start the backend server
   npm start &
   
   # Install frontend dependencies
   cd ../frontend
   npm install

   # Start the frontend server
   npm run dev

## 🗃️ API Endpoints

**Base URL:** `http://localhost:5000/api/books`

- **GET** `/books` - Retrieve all books
- **POST** `/books` - Add a new book
- **GET** `/books/:id` - Get a book by ID
- **PUT** `/books/:id` - Update a book by ID
- **DELETE** `/books/:id` - Delete a book by ID

example commit



   
