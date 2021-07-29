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
    this.$vuetify.theme.dark = this.isDarkModeEnabled()
    this.$store.dispatch('app/init');
  },

  methods: {
    isDarkModeEnabled() {
      return window.localStorage.getItem('darkMode') == 'true' ? true : false
    }
  }
}
</script>