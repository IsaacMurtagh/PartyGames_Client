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
}
</script>