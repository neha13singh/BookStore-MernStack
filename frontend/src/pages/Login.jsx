// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';
// import { apiClient } from '../utils/api'; // Import your API client

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Make API call to login
//       const response = await apiClient.post('/auth/login', { email, password });
//       const { token } = response.data; // Extract token from response

//       // Check if token is present
//       if (token) {
//         localStorage.setItem('token', token); // Store token in local storage
//         localStorage.setItem('username', email); // Store username/email in local storage
//         enqueueSnackbar('Login successful!', { variant: 'success' });
//         navigate('/'); // Redirect to home page after successful login
//       } else {
//         throw new Error('Login failed: No token received');
//       }
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || 'Invalid email or password';
//       enqueueSnackbar(errorMessage, { variant: 'error' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-red-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center text-red-600">Login</h2>
//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full p-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} transition`}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import { useSnackbar } from 'notistack'; // Import Snackbar for notifications
// import { apiClient } from '../utils/api'; // Import your API client

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState(''); // State for email input
//   const [password, setPassword] = useState(''); // State for password input
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const navigate = useNavigate(); // Initialize navigate for redirection
//   const { enqueueSnackbar } = useSnackbar(); // Initialize Snackbar for notifications

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setLoading(true); // Set loading state to true

//     try {
//       // Make API call to login
//       const response = await apiClient.post('/auth/login', { email, password });
//       const { token } = response.data; // Extract token from response

//       // Check if token is present
//       if (token) {
//         localStorage.setItem('token', token); // Store token in local storage
//         localStorage.setItem('username', email); // Store username/email in local storage
//         onLogin(token, email); // Call onLogin prop to update state in App
//         enqueueSnackbar('Login successful!', { variant: 'success' }); // Show success message
//         navigate('/'); // Redirect to home page after successful login
//       } else {
//         throw new Error('Login failed: No token received'); // Handle case where token is not returned
//       }
//     } catch (err) {
//       // Handle error
//       const errorMessage = err.response?.data?.message || 'Invalid email or password';
//       enqueueSnackbar(errorMessage, { variant: 'error' }); // Show error message
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-red-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center text-red-600">Login</h2>
//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} // Update email state
//               placeholder="Enter your email"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} // Update password state
//               placeholder="Enter your password"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading} // Disable button while loading
//             className={`w-full p-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} transition`}
//           >
//             {loading ? 'Logging in...' : 'Login'} 
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import { useSnackbar } from 'notistack';
import { apiClient } from '../utils/api';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', email);
        onLogin(token, email);
        enqueueSnackbar('Login successful!', { variant: 'success' });
        navigate('/');
      } else {
        throw new Error('Login failed: No token received');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid email or password';
      enqueueSnackbar(errorMessage, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
   
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-red-600">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;