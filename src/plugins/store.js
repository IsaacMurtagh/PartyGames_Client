import Vue from 'vue'
import Vuex from 'vuex'
import apiClient from '../apiClient';
import config from '../config';
import app from '../stores/app';
import game from '../stores/game';
import webSocket from '../stores/webSocket';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: app({ apiClient }),
    game: game({ apiClient }),
    webSocket: webSocket({ apiClient, config }),
  },
});

export default store;
