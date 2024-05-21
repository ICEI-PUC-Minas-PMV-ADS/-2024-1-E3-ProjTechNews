// axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // http://localhost:3000 substituir localhost pelo ip local 'http://192.168.0.5:3001'
});

export default api;
