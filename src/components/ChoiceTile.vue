<template>
  <v-sheet align="center" class="justify-center" height="200">
    <v-btn block tile x-large class="h-full"> 
      {{ choice.description }}
    </v-btn>
  </v-sheet>
</template>
<script>
export default {
  props: {
    choice: { type: Object, required: true }
  }
}
</script>
<style>
.h-full {
  height: 100% !important;
}
</style>