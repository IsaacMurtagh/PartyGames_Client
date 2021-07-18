import Vue from 'vue'
import Vuex from 'vuex'
import apiClient from '../apiClient';
import app from '../stores/app';
import game from '../stores/game';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: app({ apiClient }),
    game: game({ apiClient }),
  },
});

export default store;
