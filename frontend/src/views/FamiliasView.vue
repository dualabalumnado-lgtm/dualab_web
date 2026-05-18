<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FamiliaCard from '../components/FamiliaCard.vue'

const router = useRouter()

const filtroActivo = ref('Todas')

const sectores = [
  {
    nombre: 'Tecnología',
    icono: '💻',
    imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=720&fit=crop',
    gridClass: 'col-span-1 lg:col-span-3',
    compact: false,
  },
  {
    nombre: 'Arte y Diseño',
    icono: '🎨',
    imagen: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
    gridClass: 'col-span-1 lg:col-span-3',
    compact: false,
  },
  {
    nombre: 'Salud',
    icono: '🏥',
    imagen: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1280&h=720&fit=crop',
    gridClass: 'col-span-1 lg:col-span-2',
    compact: true,
  },
  {
    nombre: 'Servicios',
    icono: '🤝',
    imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1280&h=720&fit=crop',
    gridClass: 'col-span-1 lg:col-span-2',
    compact: true,
  },
  {
    nombre: 'Naturaleza',
    icono: '🌿',
    imagen: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1280&h=720&fit=crop',
    gridClass: 'col-span-2 lg:col-span-2',
    compact: true,
  },
]

const filtros = ['Todas', ...sectores.map(s => s.nombre)]

const sectoresFiltrados = computed(() =>
  filtroActivo.value === 'Todas'
    ? sectores
    : sectores.filter(s => s.nombre === filtroActivo.value)
)

const go = (nombre) => router.push(`/sector/${encodeURIComponent(nombre)}`)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

    <!-- Hero -->
    <div class="py-16 px-6">
      <div class="max-w-2xl mx-auto text-center">

        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
          Descubre
          <span style="background-image: linear-gradient(to right, #22c55e, #a3e635); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block;">retos reales</span>
          por sector
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-base mb-8">
          Encuentra microretos alineados con cada área de FP
        </p>

        <!-- Filtros -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button
            v-for="f in filtros"
            :key="f"
            @click="filtroActivo = f"
            :class="filtroActivo === f
              ? 'bg-green-600 text-white font-semibold shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-green-400 hover:text-green-700'"
            class="btn btn-ghost px-4 py-1.5 rounded-full text-sm"
          >
            {{ f }}
          </button>
        </div>

        <!-- CTA -->
        <button
          @click="router.push('/microretos')"
          class="btn btn-green bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg"
        >
          Ver todos los microretos →
        </button>

      </div>
    </div>

    <!-- Sector Cards -->
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-3 sector-grid">
        <FamiliaCard
          v-for="s in sectoresFiltrados"
          :key="s.nombre"
          :familia="s"
          :compact="sectoresFiltrados.length === 1 ? false : s.compact"
          :large="true"
          :class="sectoresFiltrados.length === 1 ? 'col-span-2 lg:col-span-6' : s.gridClass"
          @click="go(s.nombre)"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>
.sector-grid:hover > * {
  opacity: 0.45;
  transition: opacity 0.25s ease;
}
.sector-grid:hover > *:hover {
  opacity: 1;
}
.sector-grid > * {
  transition: opacity 0.25s ease;
}
</style>
