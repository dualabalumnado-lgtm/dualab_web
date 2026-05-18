<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search } from 'lucide-vue-next'
import MicroretoCard from '../components/MicroretoCard.vue'
import { getMicroretos } from '../services/api'
import { familias as familiasLocal, microretos as microretosLocal } from '../data/mock'

const familiasMap = Object.fromEntries(familiasLocal.map(f => [f.id, f]))
const microretosConFamilia = microretosLocal.map(m => ({ ...m, familia: familiasMap[m.familiaId] ?? null }))

const microretos       = ref(microretosConFamilia)
const busqueda         = ref('')
const dificultadActiva = ref('Todas')
const niveles = ['Todas', 'Básico', 'Intermedio', 'Avanzado']

onMounted(async () => {
  try {
    const data = await getMicroretos()
    if (data?.length) microretos.value = data
  } catch { /* mantiene los datos locales */ }
})

const retosFiltrados = computed(() => {
  let lista = microretos.value
  if (dificultadActiva.value !== 'Todas')
    lista = lista.filter(r => r.dificultad === dificultadActiva.value)
  if (busqueda.value.trim()) {
    const q = busqueda.value.toLowerCase()
    lista = lista.filter(r =>
      r.titulo.toLowerCase().includes(q) ||
      r.descripcion.toLowerCase().includes(q)
    )
  }
  return lista
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" style="background: linear-gradient(135deg, #f0f5ea 0%, #ffffff 45%, #f5f8fb 100%);">

    <!-- ── HERO ──────────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden pt-28 pb-20 px-6">

      <!-- Glow radial de fondo -->
      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div style="
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(134,239,172,0.18) 0%, transparent 70%);
          filter: blur(40px);
        "/>
      </div>

      <div class="relative max-w-4xl mx-auto text-center">

        <!-- Badge dinámico con conteo real -->
        <div
          v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 500 } }"
          style="
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(22,163,74,0.08); border: 1px solid rgba(22,163,74,0.2);
            border-radius: 999px; padding: 6px 16px; margin-bottom: 28px;
          "
        >
          <span style="width:6px;height:6px;border-radius:50%;background:#16a34a;animation:pulse 2s infinite;display:inline-block;" />
          <span style="color:#15803d;font-size:11px;font-weight:700;letter-spacing:0.10em;text-transform:uppercase;">
            {{ microretos.length }} microretos activos
          </span>
        </div>

        <!-- Headline -->
        <h1
          v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 500, delay: 80 } }"
          style="font-size: clamp(2.8rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.08; color: #0f172a; margin-bottom: 20px;"
        >
          Explora
          <span style="background-image: linear-gradient(90deg, #16a34a, #65a30d); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block;">
            retos reales
          </span>
        </h1>

        <!-- Subtítulo -->
        <p
          v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 450, delay: 150 } }"
          style="font-size: 1.125rem; color: #6b7280; max-width: 520px; margin: 0 auto 40px; line-height: 1.65;"
        >
          Experiencias prácticas alineadas con competencias reales del mercado laboral.
        </p>

        <!-- Buscador -->
        <div
          v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 400, delay: 210 } }"
          class="relative max-w-md mx-auto mb-6"
        >
          <Search :size="15" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            v-model="busqueda"
            type="text"
            placeholder="Buscar microreto…"
            style="
              width: 100%; padding: 12px 16px 12px 40px;
              background: rgba(255,255,255,0.85); backdrop-filter: blur(16px);
              border: 1px solid rgba(0,0,0,0.08); border-radius: 14px;
              font-size: 14px; color: #111827;
              box-shadow: 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9);
              outline: none; transition: border-color 0.2s, box-shadow 0.2s;
            "
            @focus="$event.target.style.borderColor='rgba(22,163,74,0.4)'"
            @blur="$event.target.style.borderColor='rgba(0,0,0,0.08)'"
          />
        </div>

        <!-- Filtros -->
        <div
          v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 380, delay: 270 } }"
          class="flex flex-wrap justify-center gap-2"
        >
          <button
            v-for="n in niveles" :key="n"
            @click="dificultadActiva = n"
            class="btn filter-chip"
            :class="dificultadActiva === n ? 'filter-chip--active' : ''"
          >{{ n }}</button>
        </div>

      </div>
    </section>

    <!-- ── GRID ──────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-6 pb-28">

      <!-- Contador -->
      <p style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin-bottom:24px;">
        {{ retosFiltrados.length }} resultado{{ retosFiltrados.length !== 1 ? 's' : '' }}
      </p>

      <!-- Sin resultados -->
      <div v-if="retosFiltrados.length === 0" class="text-center py-32">
        <p class="text-5xl mb-5">🔎</p>
        <p style="font-size:1.1rem;font-weight:600;color:#374151;">Sin resultados</p>
        <p style="font-size:0.875rem;color:#9ca3af;margin-top:6px;">Prueba con otro término o nivel</p>
      </div>

      <!-- Grid -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start"
      >
        <div
          v-for="(reto, i) in retosFiltrados"
          :key="reto.id"
          :class="{ 'md:col-span-2': i === 0 }"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 400, delay: Math.min(i * 45, 350) } }"
        >
          <MicroretoCard
            :reto="reto"
            :familia="reto.familia"
            :featured="i === 0"
          />
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.filter-chip {
  padding: 7px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(0,0,0,0.08);
  color: #6b7280;
  backdrop-filter: blur(8px);
  transition: all 0.18s ease;
}
.filter-chip:hover {
  background: rgba(255,255,255,0.95);
  border-color: rgba(22,163,74,0.3);
  color: #15803d;
}
.filter-chip--active {
  background: #16a34a;
  border-color: #16a34a;
  color: #fff;
  box-shadow: 0 4px 12px rgba(22,163,74,0.28);
}
.filter-chip--active:hover {
  background: #15803d;
  color: #fff;
}
</style>
