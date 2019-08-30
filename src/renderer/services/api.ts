import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ru.wikipedia.org/w/api.php',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default instance;
