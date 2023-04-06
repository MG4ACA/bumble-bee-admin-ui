import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Divider from "primevue/divider"
import Toast from "primevue/toast"
import DataTable from "primevue/datatable"
import InputNumber from "primevue/inputnumber"
import DropDown from "primevue/dropdown"


import './assets/main.css'
import 'primeflex/primeflex.css'
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Divider', Divider)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('DropDown', DropDown)

app.component()

app.mount('#app')
