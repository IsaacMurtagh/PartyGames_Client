import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios';

const app = createApp(App)
app
  .use(vuetify)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  


app.mount('#app')
