<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
  </v-navigation-drawer>
  
  <v-app-bar app >
    <v-app-bar-title @click="$router.push('/')">Party Games</v-app-bar-title>  
    <v-spacer />
    <!-- <v-app-bar-nav-icon right @click="drawer = !drawer" /> -->
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>