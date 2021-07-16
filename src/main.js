import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/store'
import App from './App.vue'

const app = createApp(App)
app
  .use(vuetify)
  .use(router)
  .use(store)
  
app.mount('#app');
