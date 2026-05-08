<script setup>
import { ref, computed, onMounted } from 'vue'
import FamiliaCard from "../components/FamiliaCard.vue"
import { getFamilias } from "../services/api"
import { useRouter } from "vue-router"

const router = useRouter()
const go = (id) => router.push(`/familia/${id}`)

const familias     = ref([])
const busqueda     = ref('')
const filtroActivo = ref('Todas')

onMounted(async () => {
  familias.value = await getFamilias()
})

const sectores = {
  'Tecnología':    ['Electricidad y Electrónica', 'Energía y Agua', 'Fabricación Mecánica', 'Industrias Extractivas', 'Informática y Comunicaciones', 'Instalación y Mantenimiento', 'Química'],
  'Arte y Diseño': ['Artes Gráficas', 'Artes y Artesanías', 'Imagen Personal', 'Imagen y Sonido', 'Textil, Confección y Piel', 'Vidrio y Cerámica'],
  'Salud':         ['Actividades Físicas y Deportivas', 'Sanidad'],
  'Servicios':     ['Administración y Gestión', 'Comercio y Marketing', 'Hostelería y Turismo', 'Seguridad y Medioambiente', 'Servicios Socioculturales', 'Transporte y Mantenimiento de Vehículos'],
  'Naturaleza':    ['Agraria', 'Edificación y Obra Civil', 'Madera, Mueble y Corcho', 'Marítimo Pesquera'],
}

const filtros = ['Todas', ...Object.keys(sectores)]

const familiasFiltradas = computed(() => {
  let lista = familias.value

  if (filtroActivo.value !== 'Todas') {
    const nombres = sectores[filtroActivo.value]
    lista = lista.filter(f => nombres.includes(f.nombre))
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
