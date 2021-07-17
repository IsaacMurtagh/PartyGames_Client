import Vue from 'vue'
import Vuex from 'vuex'
import apiClient from '../apiClient';
import app from '../stores/app';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: app({ apiClient }),
  },
});

export default store;
