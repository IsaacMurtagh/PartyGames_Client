<template>
  <div>
    <div v-if="!game">
      no game
    </div>
    <div v-else>
      <pre>{{ game }}</pre>
      <pre> {{ messages }}</pre>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'GameScreen',

  computed: {
    ...mapState('game', ['game', 'initGameLoading', 'initError']),
    ...mapState('app', ['user']),
    ...mapState('webSocket', ['messages']),

    currentComponent() {
      if (this.initGameLoading) {
        return 'loadingScreen';
      }

      return 'Lobby'
    }
  },

  async created() {
    await this.$store.dispatch('game/init', this.$route.params.gameId);
    if (!this.initError) {
      this.$store.dispatch('webSocket/createConnection', {
        gameId: this.game.id,
        userId: this.user.id,
      });
    }
  },

  destroyed() {
    this.$store.dispatch('webSocket/destroyConnection');
  },

  methods: {
    handleOnMessage(event) {
      console.log(event);
      this.messages.push(event.data);
    }
  }
}
</script>