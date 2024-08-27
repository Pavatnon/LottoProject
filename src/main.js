import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// Leyout
import Layout from '@/component/Layout.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)


// Leyout Component
app.component('Layout',Layout)

app.mount('#app')
