<template>
  <main-app-bar />
  <v-container class="h-full">
    <v-row class="h-1/2">
      <v-col align="center" class="pa-12">
        <v-sheet height="100%">
          <v-btn block class="h-full" @click="$router.push('/create-game')"> Create a Game </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="h-1/2">
      <v-col align="center" class="pa-12">
        <v-sheet height="100%">
          <v-btn block class="h-full" @click="$router.push('/join-game')"> Join a Game </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainAppBar from '../components/MainAppBar';

export default {
  name: 'Dashboard',
  components: {
    MainAppBar,
  }
}
</script>
<style scoped>

.h-full {
  height: 100%
}

.h-1\/2 {
  height: 50%
}
</style>
