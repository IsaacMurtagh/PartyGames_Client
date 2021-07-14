<template>
  <div>
    {{ config }}
  </div>
</template>
<script>
import config from '../config.json';

export default {
  computed: {
    config() {
      return config;
    }
  }
}
</script>