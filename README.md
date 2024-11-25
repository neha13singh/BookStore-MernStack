# 📚 Bookshow  A Book Management System

A MERN stack application for managing a bookstore's inventory with features for creating, reading, updating, and deleting books. Built with MongoDB, Express.js, React, Node.js, and styled with Tailwind CSS.

## ✨ Key Features

- **Book Management**
  - CRUD operations for books
  - Rich book details with summaries
  - Table & Card view options
- **Search & Filter**
  - Real-time search functionality
  - Filter by title, author, or year
- **Responsive Design**
  - Mobile-friendly interface
  - Modern UI with Tailwind CSS


## 🖼️ Demo Screenshots

### Home Page - Table View
![Table View](https://github.com/user-attachments/assets/c8a2ecd0-43f8-4e8e-a994-4f7f8f2f10d2)



### Home Page - Card View
![Card View](https://github.com/user-attachments/assets/d137e2b3-fea9-44e6-9aa1-8cbb89e431b3)


## 📚 Book Operations

### Create Book
![Create Book](https://github.com/user-attachments/assets/a1110b89-77ac-4b2e-9629-e763bbf7863c)




### Book Details
![Book Details](https://github.com/user-attachments/assets/9d93c807-da61-4d24-8f1f-6d4f5af0f1ec)

)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

## 🛠️ Technologies Used

- **Frontend:**
  - React
  - React Router
  - Tailwind CSS
  - Axios
  - Notistack (for notifications)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - CORS (for handling cross-origin requests)
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

## 📝 Environment Variables

To run this project, create a `.env` file in the `backend` directory and add the following environment variables:
MONGODB_URI=your_mongodb_connection_string
PORT=8080

## 🗃️ API Endpoints

**Base URL:** `http://localhost:5173`

- **GET** `/books`  
  Retrieve all books.

- **POST** `/books`  
  Add a new book.

- **GET** `/books/:id`  
  Get a book by ID.

- **PUT** `/books/:id`  
  Update a book by ID.

- **DELETE** `/books/:id`  
  Delete a book by ID.

---

<p align="center">Made with ❤️ by Neha Singh</p>
<p align="center">Thank you for checking out this project!</p>
