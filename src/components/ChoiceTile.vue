<template>
  <v-sheet align="center" class="justify-center" height="200">
    <v-btn 
      block tile x-large class="h-full" 
      :class="{ 'cyan': choice.chosen }"
      @click="handleSelected"
    > 
      {{ choice.description }}
    </v-btn>
  </v-sheet>
</template>
<script>
export default {
  props: {
    choice: { type: Object, required: true },
    disabled: { type: Boolean, required: true },
  },

  methods: {
    handleSelected() {
      if (this.disabled) {
        return;
      }
      this.choice.select();
      this.$emit('choice-selected');
    }
  }
}
</script>
<style>
.h-full {
  height: 100% !important;
}
</style>