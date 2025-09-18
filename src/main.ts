import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'

//import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
