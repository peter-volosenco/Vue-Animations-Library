import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#root');

console.log("App Version: ", process.env.VERSION);
console.log("App Test: ", process.env.TEST);

// Vue Tools
// https://www.vuetoolbox.com/
// https://www.vuetoolbox.com/projects/vuex-rest-api


// Unicode symbols
// https://unicode-table.com/en/search/?q=email