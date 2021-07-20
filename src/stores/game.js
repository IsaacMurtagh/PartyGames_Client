import Game from '@/models/Game';
import Player from '@/models/Player';

function createStore({ apiClient }) {
  return {
    namespaced: true,

    state: () => ({
      game: {},
      initError: null,
      createGameError: null,
      selfPlayer: null,
      createGameLoading: false,
      initGameLoading: true,
    }),

    mutations: {
      setInitError(state, value) {
        state.initError = value;
      },

      setCreateGameError(state, value) {
        state.createGameError = value;
      },

      setGame(state, value) {
        state.game = value;
      },

      setSelfPlayer(state, value) {
        state.selfPlayer = value;
      },

      setCreateGameLoading(state, value) {
        state.createGameLoading = value;
      },

      setInitGameLoading(state, value) {
        state.initGameLoading = value;
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
          commit('setCreateGameError', error);
        });
        commit('setCreateGameLoading', false);
      },

      async getGame({ commit, state }, gameId) {
        if (state.game.id == gameId) {
          return;
        }
        
        await apiClient.getGame(gameId)
        .then(response => {
          commit('setGame', new Game(response.data));
        })
        .catch(error => {
          commit('setCreateGameError', error);
        });
      },

      async init({ commit, dispatch }, gameId) {
        await dispatch('getGame', gameId);
        commit('setInitGameLoading', false);
      }
    },
  };
}

export default createStore;
