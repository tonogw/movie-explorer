import axios from 'axios';

// TODO: Create axios instance with base configuration
// Hint: Use environment variables for API URL and API key
// Reference: https://axios-http.com/docs/instance

const api = axios.create({
  // TODO: Configure baseURL from environment variable
  // TODO: Add default headers (API key, content-type)
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
});

// TODO: Add request interceptor if needed
// Hint: You can add API key to every request here
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// TODO: Add response interceptor for error handling
api.interceptors.response.use(
  (Response) => {
    return Response;
  },
  (error) => {
    console.error('API Error:', error);

    return Promise.reject(error);
  }
);

export default api;
