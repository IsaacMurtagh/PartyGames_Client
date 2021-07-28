import Player from '@/models/Player';
import Round from '@/models/Round';

function createStore({ config }) {
  return {
    namespaced: true,

    state: () => ({
      connection: null,

    }),

    getters: {
      connected(state) {
        return !!state.connection?.OPEN
      }
    },

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
        state.connection.onopen = function(event) {
          console.log(event);
          dispatch('game/addSelfToParticipants', null, { root: true });
          dispatch('game/getGame', rootState.game.game.id, { root: true });
        }
      },

      handleOnDisconnect({ state }) {
        state.connection.onclose = function(event) {
          console.log(event);
        }
      },

      handleOnMessage({ state, commit, dispatch, rootState }) {
        state.connection.onmessage = function(event) {
          const { data, message } = JSON.parse(event.data);
          switch(message) {
            case 'PLAYER_JOINED':
              commit('game/addParticipant', new Player(data), { root: true });
              break;
            case 'PLAYER_LEFT':
              commit('game/removeParticipantByAlias', data.alias, { root: true });
              break;
            case 'GAME_STARTED':
              commit('game/setGameStatus', 'inprogress', { root: true });
              break;
            case 'NEW_ROUND':
              commit('game/setCurrentRound', new Round(data), { root: true });
              break;
            case 'GAME_FINISHED':
              state.connection.close();
              commit('game/setGameStatus', 'finished', { root: true });
              dispatch('game/getGame', rootState.game.game.id, { root: true });
              break;
          }
          console.log({ data, message });
        };
      },

      startGame({ state }) {
        state.connection.send(JSON.stringify({
          action: 'startgame',
        }));
      }
    },
  };
}

export default createStore;
