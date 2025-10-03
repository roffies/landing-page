import { createApp } from 'vue'
import './style.css'
import App from './app-root.vue'
import PrimeVue from 'primevue/config'
import router from './router'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
