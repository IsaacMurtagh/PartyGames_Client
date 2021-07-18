<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  created() {
    this.$store.dispatch('app/init');
  }
}
</script>
<style>
div > .v-application--wrap {
  min-height: 80vh;
}
</style>