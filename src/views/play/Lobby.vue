<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h2>{{ gameType }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(participant, i) in participantsAsList"
        :key="i"
        align="center"
      >
        <player-avatar :player="participant" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import splitCamelCase from '@/utils/splitCamelCase';
import PlayerAvatar from '@/components/PlayerAvatar';

export default {
  name: 'GameScreen',

  components: {
    PlayerAvatar
  },

  computed: {
    ...mapState('game', ['game']),
    ...mapGetters('game', ['participantsAsList']),
    
    gameType() {
      return splitCamelCase(this.game.type);
    },
  },
}
</script>