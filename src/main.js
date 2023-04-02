import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Divider from "primevue/divider"
import Toast from "primevue/toast"


import './assets/main.css'
import 'primeflex/primeflex.css'
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Divider', Divider)
app.component('Toast', Toast)

app.mount('#app')
