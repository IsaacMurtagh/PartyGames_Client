<template>
  <div>
    <v-app-bar app>
      <v-app-bar-title @click="$router.push('/')">Party Games</v-app-bar-title>
      <v-spacer />
      <v-app-bar-nav-icon right @click="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        
      <v-list-item >
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          label="Dark Mode"
        ></v-switch>
      </v-list-item>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="goToRoute(item.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon v-text="'mdi-chevron-right'"></v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          text: 'Home',
          route: '/'
        },
        {
          icon: 'mdi-pencil',
          text: 'Create game',
          route: '/create-game'
        },
        {
          icon: 'mdi-account-multiple-plus',
          text: 'Join game',
          route: '/join-game'
        },
      ],
      selected: this.$route.path,
    }
  },

  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    }
  },

  watch: {
    darkMode() {
      window.localStorage.setItem('darkMode', this.darkMode);
    }
  },

  methods: {
    async goToRoute(route) {
      this.drawer = false;
      const currentRoute = (this.$route.path != '/' ? this.$route.path.replace(/\/$/, "") : '/');
      if (currentRoute != route) {
        this.$router.push(route);
      }
    }
  }
}
</script>