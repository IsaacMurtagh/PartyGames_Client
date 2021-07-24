<template>
  <div>
    <v-app-bar app>
    <v-app-bar-title>{{ gameName.toUpperCase() }}</v-app-bar-title>
    <v-spacer />
    <v-btn @click="$router.push('/')">Leave</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    gameName: { type: String, default: '' },
  },
}
</script>