// axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // http://localhost:3000 substituir localhost pelo ip local
});

export default api;
