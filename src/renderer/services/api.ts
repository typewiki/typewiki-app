import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php'
});

delete instance.defaults.headers.common['Origin'];

export default instance;
