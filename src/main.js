import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import App from './App.vue'

const app = createApp(App)
app
  .use(vuetify)
  .use(router)

app.mount('#app')
