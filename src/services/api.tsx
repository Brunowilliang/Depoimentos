import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60de377a878c890017fa2e19.mockapi.io/api',
});

export default api;
