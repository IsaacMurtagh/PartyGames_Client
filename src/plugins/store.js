import { createStore } from 'vuex';

import app from '../stores/app';

const store = createStore({
  modules: {
    app: app(),
  },
});

export default store;
