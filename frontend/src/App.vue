<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import logoUrl from './assets/logo_dualab.png'

const dark = ref(false)
const scrolled = ref(false)

function toggleDark() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
}

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  dark.value = saved ? saved === 'dark' : prefersDark
  document.documentElement.classList.toggle('dark', dark.value)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- Wrapper flotante -->
  <div class="sticky top-0 z-50 flex justify-center px-4 pt-3 pb-1 pointer-events-none">
    <nav
      class="nav-pill pointer-events-auto w-full max-w-5xl flex items-center justify-between px-5 py-2.5"
      :class="scrolled ? 'nav-pill--scrolled' : 'nav-pill--top'"
    >

      <!-- Izquierda: logo + nombre -->
      <RouterLink to="/" class="flex items-center gap-2 shrink-0 no-underline">
        <img :src="logoUrl" alt="DuaLab" class="h-6 w-auto" />
        <span class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">DuaLab</span>
      </RouterLink>

      <!-- Centro: navegación -->
      <div class="flex items-center gap-1">
        <RouterLink
          to="/"
          class="nav-link"
          active-class="nav-link--active"
        >
          Familias
        </RouterLink>
        <RouterLink
          to="/microretos"
          class="nav-link"
          active-class="nav-link--active"
        >
          Microretos
        </RouterLink>
      </div>

      <!-- Derecha: dark mode + CTA -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          @click="toggleDark"
          class="btn w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all duration-200"
          :title="dark ? 'Modo claro' : 'Modo oscuro'"
        >
          <Sun v-if="dark" :size="15" />
          <Moon v-else :size="15" />
        </button>
        <button class="btn btn-green text-xs font-semibold px-4 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white transition-all duration-200">
          Demo →
        </button>
      </div>

    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.nav-pill {
  border-radius: 16px;
  transition: background 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
}

.nav-pill--top {
  background: transparent;
  box-shadow: none;
  border: 1px solid transparent;
}

.nav-pill--scrolled {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.06);
}

.dark .nav-pill--scrolled {
  background: rgba(15, 17, 21, 0.80);
  box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.06);
}

.nav-link {
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 8px;
  color: #6B7280;
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-link:hover {
  color: #111827;
  background: rgba(0,0,0,0.04);
}

.dark .nav-link {
  color: #9CA3AF;
}

.dark .nav-link:hover {
  color: #F9FAFB;
  background: rgba(255,255,255,0.06);
}

.nav-link--active {
  color: #16a34a;
  font-weight: 600;
}

.dark .nav-link--active {
  color: #4ade80;
}
</style>
