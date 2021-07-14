<template>
  <v-container>
    Welcome to my page
    <router-link to="/test">to test</router-link>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',

  computed: {
    ...mapState('app', ['appReady'])
  }
}
</script>
