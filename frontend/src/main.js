import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
import App from './App.vue'
import FamiliasView from './views/FamiliasView.vue'
import FamiliaDetailView from './views/FamiliaDetailView.vue'
import MicroretoDetailView from './views/MicroretoDetailView.vue'
import MicroretosView from './views/MicroretosView.vue'
import SectorView from './views/SectorView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/familias',        component: FamiliasView        },
    { path: '/sector/:nombre',  component: SectorView          },
    { path: '/familia/:id',     component: FamiliaDetailView   },
    { path: '/reto/:id',        component: MicroretoDetailView },
    { path: '/microretos',      component: MicroretosView      },
  ]
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
