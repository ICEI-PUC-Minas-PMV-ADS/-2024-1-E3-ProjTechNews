// axiosConfig.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.5:3001', // http://localhost:3001 substituir localhost pelo ip local
});

export default instance;
