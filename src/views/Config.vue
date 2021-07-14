<template>
  <div>
    <pre>{{ config }}</pre>
  </div>
</template>
<script>
import config from '../config';

export default {
  computed: {
    config() {
      return config;
    }
  }
}
</script>