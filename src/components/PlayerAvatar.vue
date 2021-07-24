<template>
  <div>
    <v-avatar size="124" :color="avatarColour">
      <v-icon size="56" dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    <div><h4>{{ player.displayName }}</h4></div>
  </div>
</template>
<script>
import stringToNumber from '@/utils/stringToNumber';

export default {
  props: {
    player: { type: Object, required: true },
  },

  data() {
    return {
      avatarColours: [ 'red', 'green', 'blue', 'pink', 'orange', 'indigo', 'brown', 'yellow', 'teal', 'cyan', 'black', ]
    }
  },

  computed: {
    avatarColour() {
      const colourIndex = (stringToNumber(this.player.alias) % this.avatarColours.length);
      return this.avatarColours[colourIndex];
    }
  }
}
</script>