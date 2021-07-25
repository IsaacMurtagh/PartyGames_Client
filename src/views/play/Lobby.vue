<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <div class="d-flex justify-center">
          <h2 class="px-2">{{ gameType }}</h2>
          <info-dialog>
            <template v-slot:header>Would You Rather</template>
            <template v-slot:content>
              <div class="pb-4">Currently, <b>Would You Rather</b> is the only supported game mode. <br></div>
              <h2 class="pb-1">How to play</h2>
              <ol>
                <li>Create a room for this game mode, and then share the link provided with your friends so they can join you.</li>
                <li>Once all in and you've chosen your names, the host starts the game.</li>
                <li>Each player is presented with the same set of images, and individually you must choose what you prefer. For example, ice-cream or frozen yogurt.</li>
                <li>After 10 rounds, you will all proceed to a summary page where you can analyse results and compare choices!</li>
              </ol>
            </template>
          </info-dialog>
        </div>
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
    <v-row>
      <v-col>
        <v-btn v-if="connected" @click="startGame">
          Start
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import splitCamelCase from '@/utils/splitCamelCase';
import PlayerAvatar from '@/components/PlayerAvatar';
import InfoDialog from '@/components/InfoDialog';

export default {
  name: 'GameScreen',

  components: {
    PlayerAvatar,
    InfoDialog,
  },

  computed: {
    ...mapState('game', ['game']),
    ...mapGetters('game', ['participantsAsList']),
    ...mapGetters('webSocket', ['connected']),
    
    gameType() {
      return splitCamelCase(this.game.type);
    },
  },

  methods: {
    startGame() {
      this.$store.dispatch('webSocket/startGame');
    }
  }
}
</script>