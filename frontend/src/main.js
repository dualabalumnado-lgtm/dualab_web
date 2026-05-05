import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import App from './App.vue'
import FamiliasView from './views/FamiliasView.vue'
import FamiliaDetailView from './views/FamiliaDetailView.vue'
import MicroretoDetailView from './views/MicroretoDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',             component: FamiliasView        },
    { path: '/familia/:id',  component: FamiliaDetailView   },
    { path: '/reto/:id',     component: MicroretoDetailView },
  ]
})

createApp(App).use(router).mount('#app')
