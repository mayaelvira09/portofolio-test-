import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootsrap.css'

createApp(App)
  .use(router)
  .mount('#app')
