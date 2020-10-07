import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// store is injected here hence made available in all the app.
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
