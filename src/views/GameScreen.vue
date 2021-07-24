<template>
  <div>
    <game-app-bar
      :game-name="gameName"
    />

    <component
      :is="currentComponent"
    />

    <choose-display-name 
      :display="!initGameLoading && !myDisplayName"
      @chosen-display-name="setDisplayName"
    />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Lobby from './play/Lobby';
import Loading from '@/components/Loading';
import GameAppBar from '@/components/GameAppBar';
import ChooseDisplayName from '@/components/ChooseDisplayName';

export default {
  name: 'GameScreen',
  components: {
    Loading,
    GameAppBar,
    Lobby,
    ChooseDisplayName,
  },

  computed: {
    ...mapState('game', ['game', 'initGameLoading', 'initError']),
    ...mapGetters('game', ['myDisplayName']),
    ...mapState('app', ['user']),
    ...mapState('webSocket', ['messages']),

    currentComponent() {
      if (this.initGameLoading) {
        return 'Loading';
      }

      return 'Lobby'
    },

    gameName() {
      return this.game?.name || '';
    }
  },

  watch: {
    myDisplayName() {
      this.createWebsocketConnection();
    }
  },

  async created() {
    await this.$store.dispatch('game/init', this.$route.params.gameId);
    if (!this.initError && this.myDisplayName) {
      this.createWebsocketConnection();
    }
  },

  destroyed() {
    this.$store.dispatch('webSocket/destroyConnection');
    this.$store.dispatch('game/resetGameState');
  },

  methods: {
    handleOnMessage(event) {
      this.messages.push(event.data);
    },

    createWebsocketConnection() {
      this.$store.dispatch('webSocket/createConnection', {
        gameId: this.game.id,
        userId: this.user.id,
        displayName: this.myDisplayName,
      });
    },

    setDisplayName(displayName) {
      this.$store.commit('game/setChosenDisplayName', displayName);
    }
  }
}
</script>