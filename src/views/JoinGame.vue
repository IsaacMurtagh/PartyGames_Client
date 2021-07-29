<template>
  <div>
    <main-app-bar />
    <v-row>
      <v-col align="center" class="pt-12">
        <h2>The creator of the game should have a link to share with you.</h2>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import MainAppBar from '../components/MainAppBar';

export default {
  name: 'JoinGame',
  components: {
    MainAppBar,
  }
}
</script>