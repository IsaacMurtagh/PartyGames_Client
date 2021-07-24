import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from './config'

const axiosClient = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 3000,
  headers: { 'Content-Type': 'text/plain' }
});

axiosRetry(axiosClient, { retries: 3 });

export default {
  createUser() {
    return axiosClient.post('/users');
  },

  getUser(userId) {
    return axiosClient.get(`/users/${userId}`);
  },

  createGame({ name, type, allowNicknames, userId }) {
    return axiosClient.post('/games',  { name, type, allowNicknames, userId });
  },

  getGame(gameId) {
    return axiosClient.get(`/games/${gameId}`);
  }
}