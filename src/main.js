import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'vant/lib/index.css';
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// app.use(ElementPlus)
app.use(router)
app.mount('#app')
