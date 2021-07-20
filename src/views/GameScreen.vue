<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Room: {{ game.name }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div 
          v-for="(message, i) in messages"
          :key="i"
        >
          {{ message }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import config from '@/config';

export default {
  name: 'GameScreen',
  data() {
    return {
      connection: null,
      messages: []
    }
  },

  computed: {
    ...mapState('game', ['game']),
    ...mapState('app', ['user']),
  },

  async created() {
    await this.$store.dispatch('game/init', this.$route.params.gameId);
    this.connection = new WebSocket(`${config.WEBSOCKET_BASE_URL}?gameId=${this.game.id}&userId=${this.user.id}`);

    this.connection.onmessage = this.handleOnMessage;

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }
  },

  methods: {
    handleOnMessage(event) {
      this.messages.push(event.data);
    }
  }
}
</script>