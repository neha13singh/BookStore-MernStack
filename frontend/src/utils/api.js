import axios from 'axios';

export const API_URL = 'https://book-show-backend-84wb.onrender.com';

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}); 