import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://book-show-backend-zwuz.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export { apiClient }; 