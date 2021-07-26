<template>
  <v-container>
    <div>
      <v-row>
        <v-col align="center">
          <h2>{{ roomHeader }}</h2>
        </v-col>
      </v-row>
    </div>
    <div v-if="!!currentRound">
      <v-row>
        <v-col>
          <v-progress-linear
            color="light-blue"
            height="50"
            :value="roundCompletedPercentage"
            striped
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          v-for="choice in currentRound.choices"
          :key="choice.id"
          cols="6"
        >
          <choice-tile :choice="choice" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import ChoiceTile from '@/components/ChoiceTile';
export default {
  
  data() {
    return {
      now: new Date(),
      interval: null,
    }
  },

  components: {
    ChoiceTile
  },

  computed: {
   ...mapState('game', ['game', 'currentRound']),

   roomHeader() {
     if (this.currentRound) {
       return `Round ${this.currentRound.round}/${this.game.numberRounds}`;
     }
     return 'Round starting soon...'
   },

   roundCompletedPercentage() {
     if (!this.currentRound) {
       return 0;
     }
     return Math.ceil((this.now - this.currentRound.createdAt) / this.game.roundTimeMs * 100);
   }
  },

  created() {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 100);
  },

  destroyed() {
    clearInterval(this.interval);
  }
}
</script>