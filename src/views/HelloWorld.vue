<template>
  <v-container>
    {{ appReady }}
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
