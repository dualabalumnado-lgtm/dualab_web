<script setup>
import { ref, computed } from 'vue'
import FamiliaCard from "../components/FamiliaCard.vue"
import { familias } from "../data/mock"
import { useRouter } from "vue-router"

const router = useRouter()
const go = (id) => router.push(`/familia/${id}`)

const busqueda    = ref('')
const filtroActivo = ref('Todas')

const sectores = {
  'Tecnología':   [8, 9, 10, 15, 16, 17, 20],
  'Arte y Diseño': [4, 5, 12, 13, 24, 26],
  'Salud':         [1, 21],
  'Servicios':     [2, 6, 11, 22, 23, 25],
  'Naturaleza':    [3, 7, 18, 19],
}

const filtros = ['Todas', ...Object.keys(sectores)]

const familiasFiltradas = computed(() => {
  let lista = familias

  if (filtroActivo.value !== 'Todas') {
    const ids = sectores[filtroActivo.value]
    lista = lista.filter(f => ids.includes(f.id))
  }

  if (busqueda.value.trim()) {
    const q = busqueda.value.toLowerCase()
    lista = lista.filter(f => f.nombre.toLowerCase().includes(q))
  }

  return lista
})

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

        <!-- Buscador -->
        <div class="relative mb-5 max-w-sm mx-auto">
          <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
            🔍
          </span>
          <input
            v-model="busqueda"
            type="text"
            placeholder="Buscar familia…"
            class="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

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

    <!-- Cards -->
    <div class="max-w-7xl mx-auto px-6 py-10">

      <!-- Sin resultados -->
      <div v-if="familiasFiltradas.length === 0" class="text-center py-20 text-gray-400 dark:text-gray-500">
        <p class="text-5xl mb-4">🔎</p>
        <p class="text-lg font-medium">No se encontraron familias</p>
        <p class="text-sm mt-1">Prueba con otro término o filtro</p>
      </div>

      <!-- Grid unificado -->
      <div
        v-else
        class="grid grid-cols-2 lg:grid-cols-4 gap-3"
      >
        <FamiliaCard
          v-for="(f, i) in familiasFiltradas"
          :key="f.id"
          :familia="f"
          :compact="i >= 2"
          :class="{ 'col-span-2': i < 2 }"
          @click="go(f.id)"
        />
      </div>

    </div>
  </div>
</template>
