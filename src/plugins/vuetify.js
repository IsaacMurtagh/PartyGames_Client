import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.pink.darken1,
        secondary: colors.pink.lighten1,
      },
      dark: {
        primary: colors.cyan.darken4,
      },
    },
  },
});
