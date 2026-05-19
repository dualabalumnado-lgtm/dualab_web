<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FamiliaCard from '../components/FamiliaCard.vue'
import { familias as familiasLocal } from '../data/familias'
import { getFamilias } from '../services/api'

const route = useRoute()
const router = useRouter()

const sectorNombre = computed(() => decodeURIComponent(route.params.nombre))

const sectoresMap = {
  'Tecnología':    ['Electricidad y Electrónica', 'Energía y Agua', 'Fabricación Mecánica', 'Industrias Extractivas', 'Informática y Comunicaciones', 'Instalación y Mantenimiento', 'Química'],
  'Arte y Diseño': ['Artes Gráficas', 'Artes y Artesanías', 'Imagen Personal', 'Imagen y Sonido', 'Textil, Confección y Piel', 'Vidrio y Cerámica'],
  'Salud':         ['Actividades Físicas y Deportivas', 'Sanidad'],
  'Servicios':     ['Administración y Gestión', 'Comercio y Marketing', 'Hostelería y Turismo', 'Seguridad y Medioambiente', 'Servicios Socioculturales', 'Transporte y Mantenimiento de Vehículos'],
  'Naturaleza':    ['Agraria', 'Edificación y Obra Civil', 'Madera, Mueble y Corcho', 'Marítimo Pesquera'],
}

const sectorIconos = {
  'Tecnología':    '💻',
  'Arte y Diseño': '🎨',
  'Salud':         '🏥',
  'Servicios':     '🤝',
  'Naturaleza':    '🌿',
}

const familias = ref(familiasLocal)

onMounted(async () => {
  try {
    const data = await getFamilias()
    if (data?.length) familias.value = data
  } catch { /* mantiene los datos locales */ }
})

const familiasDeSector = computed(() => {
  const nombres = sectoresMap[sectorNombre.value] ?? []
  return familias.value.filter(f => nombres.includes(f.nombre))
})

const go = (id) => router.push(`/familia/${id}`)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

    <!-- Hero -->
    <div class="py-16 px-6">
      <div class="max-w-2xl mx-auto text-center">

        <button
          @click="router.push('/familias')"
          class="mb-6 text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-1.5 mx-auto transition-colors"
        >
          ← Todos los sectores
        </button>

        <p class="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
          {{ sectorIconos[sectorNombre] }} {{ sectorNombre }}
        </p>

        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
          Familias de
          <span style="background-image: linear-gradient(to right, #22c55e, #a3e635); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block;">{{ sectorNombre }}</span>
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-base">
          {{ familiasDeSector.length }} familia{{ familiasDeSector.length !== 1 ? 's' : '' }} profesional{{ familiasDeSector.length !== 1 ? 'es' : '' }}
        </p>

      </div>
    </div>

    <!-- Cards -->
    <div class="max-w-7xl mx-auto px-6 py-10">

      <div v-if="familiasDeSector.length === 0" class="text-center py-20 text-gray-400 dark:text-gray-500">
        <p class="text-5xl mb-4">🔎</p>
        <p class="text-lg font-medium">No se encontraron familias</p>
      </div>

      <div
        v-else
        class="grid grid-cols-2 lg:grid-cols-4 gap-3 familia-grid"
      >
        <FamiliaCard
          v-for="(f, i) in familiasDeSector"
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

<style scoped>
.familia-grid:hover > * {
  opacity: 0.45;
  transition: opacity 0.25s ease;
}
.familia-grid:hover > *:hover {
  opacity: 1;
}
.familia-grid > * {
  transition: opacity 0.25s ease;
}
</style>
