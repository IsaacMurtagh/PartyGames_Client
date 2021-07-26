import Vue from 'vue';
import Game from '@/models/Game';
import Player from '@/models/Player';

function createStore({ apiClient }) {
  return {
    namespaced: true,

    state: () => ({
      game: null,
      initError: null,
      createGameError: null,
      createGameLoading: false,
      initGameLoading: true,
      chosenDisplayName: null,
      currentRound: null,
    }),

    getters: {
      participantsAsList(state) {
        return state.game ? Object.values(state.game.participants).filter(p => p.active) : [];
      },

      myPlayer(state, getters, rootState) {
        const myAlias = rootState.app.user.alias;
        return state.game?.participants[myAlias];
      },

      myDisplayName(state, getters) {
        return getters.myPlayer?.displayName || state.chosenDisplayName;
      },

    },

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
        Vue.set(state.game.participants, key, value);
      },

      removeParticipantByAlias(state, value) {
        Vue.set(state.game.participants[value], 'active', false);
      },

      setChosenDisplayName( state, value) {
        state.chosenDisplayName = value;
      },

      setGameStatus( state, value ) {
        Vue.set(state.game, 'status', value);
      },

      setCurrentRound( state, value ) {
        state.currentRound = value
      },
    },

    actions: {

      addSelfToParticipants({ commit, rootState, getters }) {
        commit('addParticipant', new Player({
          alias: rootState.app.user.alias,
          displayName: getters.myDisplayName,
          active: true,
        }))
      },

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
          commit('setInitError', error);
        });
      },

      async init({ commit, dispatch, state }, gameId) {
        commit('setInitGameLoading', true);
        if (state.game?.id != gameId) {
          await dispatch('getGame', gameId);
        }
        commit('setInitGameLoading', false);
      },

      resetGameState({ commit }) {
        commit('setGame', null);
        commit('setChosenDisplayName', null);
        commit('setInitError', null);
        commit('setCreateGameError', null);
      }
    },
  };
}

export default createStore;
