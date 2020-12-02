import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = window.localStorage.getItem('token');
  return config;
});

export default axios;
