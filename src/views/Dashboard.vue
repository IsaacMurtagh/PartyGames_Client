<template>
  <div 
    class="h-full pb-12"
    :class="darkMode ? 'background-dark' : 'background-light'"
  >
    <main-app-bar />
    <v-container fill-height class="pt-8">
      <v-row>
        <v-col align="center">
          <v-card p-2>
            <v-card-text>
              <v-text-field
                type="text"
                v-model="joinGameInput"
                hide-details
                placeholder="e.g. 'c049537d-d...'"
                label="Game Pin"
                prepend-inner-icon="mdi-account-arrow-right-outline"
                solo
              />
            </v-card-text>
            <v-btn height="50" block color="primary" @click="goToGame">Enter</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <h2 class="">OR</h2>
        </v-col>
      </v-row>
      <v-row class="h-1/3">
        <v-col justify="top" align="top">
          <v-sheet class="h-full">
            <v-btn block tile x-large class="h-full" color="primary" @click="$router.push('/create-game')"> Create your own game</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainAppBar from '../components/MainAppBar';

export default {
  name: 'Dashboard',
  components: {
    MainAppBar,
  },

  data() {
    return {
      joinGameInput: ''
    };
  },

  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    }
  },

  methods: {
    goToGame() {
      const gameId = this.joinGameInput.substring(this.joinGameInput.lastIndexOf('/'));
      if (gameId) {
        this.$router.push(`/game/${gameId}`)
      }
    }
  }
}
</script>
<style scoped>

.h-full {
  height: 100% !important;
}

.h-1\/3 {
  height: 33%
}

.background-light {
  background: url('../images/Direct.svg')
    center center fixed !important;
  background-size: cover;
}
.background-dark {
  background: url('../images/Nostalgia.svg')
    center center fixed !important;
  background-color: rgb(18, 18, 18) !important;
  background-size: cover;
}
</style>
