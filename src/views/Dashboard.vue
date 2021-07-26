<template>
  <div class="h-full pb-12">
    <main-app-bar />
    <v-container fill-height class="pt-8">
      <v-row class="h-1/2 hide-overflow">
        <v-col align="center">
          <v-sheet class="h-full">
            <v-btn block tile x-large class="h-full" @click="$router.push('/create-game')"> Create a Game </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="h-1/2">
        <v-col align="center">
          <v-sheet class="h-full">
            <v-btn block tile x-large class="h-full" @click="$router.push('/join-game')"> Join a Game </v-btn>
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
  }
}
</script>
<style scoped>

.h-full {
  height: 100% !important;
}

.h-1\/2 {
  height: 50%
}
</style>
