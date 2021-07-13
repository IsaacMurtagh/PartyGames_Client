function createStore() {
  return {
    namespaced: true,

    state: () => ({
      appReady: false,
    }),

    mutations: {
      setAppReady(state, ready) {
        state.appReady = ready;
      },
    },

    actions: {

      async init({ commit }) {
        commit('setAppReady', true);
      },
    },
  };
}

export default createStore;
