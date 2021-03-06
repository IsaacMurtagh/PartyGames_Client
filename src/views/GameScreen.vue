<template>
  <div>
    <game-app-bar
      :game-name="gameName"
    />

    <component
      :is="currentComponent"
    />

    <choose-display-name 
      :display="!!game && !myDisplayName"
      @chosen-display-name="setDisplayName"
    />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Lobby from './play/Lobby';
import Rounds from './play/Rounds';
import GameNotFound from './play/GameNotFound';
import Summary from './play/Summary';
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
    Rounds,
    Summary,
    GameNotFound,
  },

  computed: {
    ...mapState('game', ['game', 'initGameLoading', 'initError']),
    ...mapGetters('game', ['myDisplayName', 'myPlayer']),
    ...mapState('app', ['user']),
    ...mapState('webSocket', ['messages']),

    currentComponent() {
      if (this.initGameLoading) {
        return 'Loading';
      }
      if (this.initError) {
        return 'GameNotFound';
      }
      if(this.game.inProgress) {
        return 'Rounds'
      }
      if(this.game.finished) {
        return 'Summary'
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
    if (this.myPlayer) {
      this.$store.dispatch('game/addSelfToParticipants');
    }
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
      !this.game.finished && this.$store.dispatch('webSocket/createConnection', {
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