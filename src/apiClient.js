import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from './config'

const axiosClient = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 10000,
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

  createGame({ name, type, userId, roundTimeSeconds, numberRounds }) {
    return axiosClient.post('/games',  { name, type, roundTimeSeconds, numberRounds, userId });
  },

  getGame(gameId) {
    return axiosClient.get(`/games/${gameId}`);
  },

  makeChoice({ round, userId}) {
    return axiosClient.post(`/games/${round.gameId}/round/${round.roundNumber}`,  { 
      userId,
      choiceId: round.choiceId
    });
  }
}