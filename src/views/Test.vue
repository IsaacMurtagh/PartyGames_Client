<template>
  <pre>{{ user }}</pre>
</template>
<script>

import { mapState } from 'vuex';

export default {
  name: 'Test',

  computed: {
    ...mapState('app', ['user'])
  },
}
</script>