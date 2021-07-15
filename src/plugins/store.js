import { createStore } from 'vuex';
import apiClient from '../apiClient';
import app from '../stores/app';

const store = createStore({
  modules: {
    app: app({ apiClient }),
  },
});

export default store;
