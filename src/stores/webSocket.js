import Player from '@/models/Player';

function createStore({ config }) {
  return {
    namespaced: true,

    state: () => ({
      connection: null,
      messages: [],
    }),

    mutations: {
      setConnection(state, value) {
        state.connection = value;
      },

      setInitError(state, value) {
        state.initError = value;
      },
    },

    actions: {

      destroyConnection({ commit, state }) {
        if (state.connection) {
          state.connection.close();
          commit('setConnection', null);
        }
      },

      createConnection({ dispatch, commit, state }, { userId, gameId, displayName }) {
        if (state.connection) {
          return;
        }
        const connection = new WebSocket(`${config.WEBSOCKET_BASE_URL}?gameId=${gameId}&userId=${userId}&displayName=${displayName}`);
        commit('setConnection', connection);
        dispatch('handleOnConnect');
        dispatch('handleOnMessage');
        dispatch('handleOnDisconnect');
      },

      handleOnConnect({ state, dispatch, rootState }) {
        state.connection.onopen = function() {
          dispatch('game/addSelfToParticipants', null, { root: true });
          dispatch('game/getGame', rootState.game.game.id, { root: true });
        }
      },

      handleOnDisconnect({ state }) {
        state.connection.onclose = function(event) {
          console.log(event);
        }
      },

      handleOnMessage({ state, commit }) {
        state.connection.onmessage = function(event) {
          const { data, message } = JSON.parse(event.data);
          state.messages.push(message);
          switch(message) {
            case 'PLAYER_JOINED':
              commit('game/addParticipant', new Player(data), { root: true });
              break;
            case 'PLAYER_LEFT':
              commit('game/removeParticipantByAlias', data.alias, { root: true });
              break;
          }
          console.log({ data, message })
        };
      }
    },
  };
}

export default createStore;
