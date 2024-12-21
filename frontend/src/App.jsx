import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    setToken(storedToken);
    setUsername(storedUsername);
  }, []);

  const handleLogin = (newToken, newUsername) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', newUsername);
    setToken(newToken);
    setUsername(newUsername);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken(null);
    setUsername(null);
  };

  return (
    <>
      <Navbar token={token} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/books/create' element={<ProtectedRoute><CreateBooks /></ProtectedRoute>} />
        <Route path='/books/edit/:id' element={<ProtectedRoute><EditBook /></ProtectedRoute>} />
        <Route path='/books/delete/:id' element={<ProtectedRoute><DeleteBook /></ProtectedRoute>} />
        <Route path='/books/details/:id' element={<BookDetails />} />
        <Route path='/books/view/:id' element={<BookDetails />} />
      </Routes>
    </>
  );
};

export default App;
