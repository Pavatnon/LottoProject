import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// Leyout
import Layout from '@/component/Layout.vue'
//component
import LotteryTable from '@/component/LotteryTable.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)


// Leyout Component
app.component('Layout',Layout)

//component
app.component('LotteryTable',LotteryTable)

app.mount('#app')
