import axios from 'axios';
import config from './config'

const axiosClient = axios.create({
  baseURL: config.BASE_URL,
  timeout: 3000,
});

export default {
  createUser() {
    return axiosClient.post('/users');
  },

  getUser(userId) {
    return axiosClient.get(`/users/${userId}`);
  }
}