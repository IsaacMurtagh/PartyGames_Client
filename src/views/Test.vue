<template>
  <pre>{{ user }}</pre>
</template>
<script>
import config from '../config'

export default {
  name: 'Test',
  data() {
    return {
      user: undefined,
    }
  },

  created() {
    this.createUser()
  },

  methods: {
    createUser() {
      this.axios.post(`${config.BASE_URL}/users`).then(response => {
        this.user = response;
      })
    }
  }
}
</script>