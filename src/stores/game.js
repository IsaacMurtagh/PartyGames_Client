import Game from '@/models/Game';

function createStore({ apiClient }) {
  return {
    namespaced: true,

    state: () => ({
      game: null,
      initError: null,
      createGameError: null,
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

      setCreateGameLoading(state, value) {
        state.createGameLoading = value;
      },

      setInitGameLoading(state, value) {
        state.initGameLoading = value;
      },

      addParticipant(state, value) {
        const key = value.alias;
        state.game.participants[key] = value;
      },

      removeParticipantByAlias(state, value) {
        delete(state.game.participants[value]);
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
          commit('setGame', Game.fromApiResponse(response.data));
        })
        .catch(error => {
          commit('setCreateGameError', error);
        });
        commit('setCreateGameLoading', false);
      },

      async getGame({ commit }, gameId) {
        await apiClient.getGame(gameId)
        .then(response => {
          commit('setGame', Game.fromApiResponse(response.data));
        })
        .catch(error => {
          commit('setCreateGameError', error);
        });
      },

      async init({ commit, dispatch, state }, gameId) {
        if (state.game?.id != gameId) {
          await dispatch('getGame', gameId);
        }
        commit('setInitGameLoading', false);
      }
    },
  };
}

export default createStore;
