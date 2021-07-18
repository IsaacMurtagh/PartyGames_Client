import Game from '@/models/Game';
import Player from '@/models/Player';

function createStore({ apiClient }) {
  return {
    namespaced: true,

    state: () => ({
      game: null,
      initError: null,
      selfPlayer: null,
      createGameLoading: false,
    }),

    mutations: {
      setInitError(state, value) {
        state.initError = value;
      },

      setGame(state, value) {
        state.game = value;
      },

      setSelfPlayer(state, value) {
        state.selfPlayer = value;
      },

      setCreateGameLoading(state, value) {
        state.createGameLoading = value;
      }
    },

    actions: {

      async createGame({ commit, rootState }, { name, type }) {
        commit('setCreateGameLoading', true);
        await apiClient.createGame({
          name,
          type,
          userId: rootState.app.user.id
        })
        .then(response => {
          commit('setGame', new Game(response.data.game));
          commit('setSelfPlayer', new Player(response.data.self));
        })
        .catch(error => {
          commit('setInitError', error);
        });
        commit('setCreateGameLoading', false);
      },
    },
  };
}

export default createStore;
