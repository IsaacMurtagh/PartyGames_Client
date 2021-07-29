<template>
  <v-app>
    <v-main>
      <router-view v-if="appReady" />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',

  computed: {
    ...mapState('app', ['appReady'])
  },

  created() {
    this.$store.dispatch('app/init');
  }
}
</script>