<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h1>Game Summary</h1>
      </v-col>
    </v-row>

    <v-row v-if="!game.summary">
      <v-col align="center">
       <loading />
      </v-col>
    </v-row>

    <div v-else>
      <v-card
        v-for="roundResult in game.summary.results"
        :key="roundResult.round"
        class="ma-4"
      >
        <v-col 
          v-for="choice in roundResult.choices"
          :key="choice.id"
        >
          <h3>{{ choice.description }}</h3>
          <playerAvatar 
            class="d-inline-block"
            v-for="alias in choice.votes"
            :key="alias"
            :player="game.participants[alias]"
            :large="false"
          />
        </v-col>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import Loading from '@/components/Loading';
import PlayerAvatar from '@/components/PlayerAvatar';
export default {
  components: { 
    Loading,
    PlayerAvatar
  },

  computed: {
    ...mapState('game', ['game']),

  },



}
</script>