import React, { useState } from 'react';
import { apiClient } from '../utils/api';
import { useSnackbar } from 'notistack';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiClient.post('/auth/register', { email, password });
      enqueueSnackbar('Registration successful! You can now log in.', { variant: 'success' });
      navigate('/login');
    } catch (error) {
      enqueueSnackbar('Error: ' + error.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Create an Account</h2>
        <form onSubmit={handleRegister} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} transition`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;