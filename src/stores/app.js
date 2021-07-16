import User from '../models/User';

function createStore({ apiClient }) {
  return {
    namespaced: true,

    state: () => ({
      appReady: false,
      user: null,
      initError: null,
    }),

    mutations: {
      setAppReady(state, value) {
        state.appReady = value;
      },

      setInitError(state, value) {
        state.initError = value;
      },

      setUser(state, value) {
        state.user = value;
      },
    },

    actions: {

      async createUser({ dispatch, commit }) {
        await apiClient.createUser()
        .then(response => {
          dispatch('saveUser', new User(response.data));
        })
        .catch(error => {
          commit('setInitError', error);
        });
      },

      async init({ commit, dispatch, state }) {
        await dispatch('loadUser');
        if (!state.user) {
          await dispatch('createUser');
        }
        commit('setAppReady', true);
      },

      saveUser({ commit }, user) {
        commit('setUser', user);
        localStorage.setItem('userId', user.id);
      },

      async loadUser({ dispatch }) {
        const userId = localStorage.getItem('userId');
        if (userId) {
          await apiClient.getUser(userId)
          .then(response => {
            dispatch('saveUser', new User(response.data));
          })
          .catch(() => {
            localStorage.removeItem('userId');
          });
        }
      }
    },
  };
}

export default createStore;
