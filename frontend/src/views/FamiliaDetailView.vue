<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { ArrowLeft, BookOpen } from "lucide-vue-next"
import { microretos, familias } from "../data/mock"
import MicroretoCard from "../components/MicroretoCard.vue"

const route  = useRoute()
const router = useRouter()

const id     = Number(route.params.id)
const familia = computed(() => familias.find(f => f.id === id))
const retos   = computed(() => microretos.filter(r => r.familiaId === id))
</script>

<template>
  <div v-if="familia" class="min-h-screen transition-colors duration-300" style="background: linear-gradient(135deg, #f0f5ea 0%, #ffffff 45%, #f5f8fb 100%);">

    <!-- ── HERO ──────────────────────────────────────────────── -->
    <section class="relative h-[420px] overflow-hidden">

      <!-- Imagen de fondo -->
      <img
        :src="familia.imagen"
        :alt="familia.nombre"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay gradiente -->
      <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.10) 100%)" />

      <!-- Contenido del hero -->
      <div class="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-6 py-8">

        <!-- Botón volver -->
        <button
          class="btn inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200 w-fit"
          @click="router.back()"
        >
          <ArrowLeft :size="16" />
          Volver
        </button>

        <!-- Info familia -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 500 } }"
        >
          <!-- Badge retos -->
          <div style="
            display: inline-flex; align-items: center; gap: 6px;
            background: rgba(255,255,255,0.15); backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.25); border-radius: 999px;
            padding: 5px 14px; margin-bottom: 16px;
          ">
            <BookOpen :size="12" style="color: rgba(255,255,255,0.85)" />
            <span style="color: rgba(255,255,255,0.9); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">
              {{ retos.length }} microreto{{ retos.length !== 1 ? 's' : '' }}
            </span>
          </div>

          <!-- Nombre -->
          <div class="flex items-end gap-4">
            <span style="font-size: 3rem; line-height: 1; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));">
              {{ familia.icono }}
            </span>
            <h1 style="
              font-size: clamp(1.8rem, 4vw, 2.8rem);
              font-weight: 800;
              letter-spacing: -0.02em;
              line-height: 1.1;
              color: #fff;
              text-shadow: 0 2px 16px rgba(0,0,0,0.3);
              max-width: 700px;
            ">
              {{ familia.nombre }}
            </h1>
          </div>
        </div>

      </div>
    </section>

    <!-- ── CARDS ─────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-6 py-14">

      <!-- Encabezado sección -->
      <div class="flex items-center gap-3 mb-8">
        <div style="width: 3px; height: 20px; background: linear-gradient(to bottom, #16a34a, #65a30d); border-radius: 2px;" />
        <h2 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: #9ca3af;">
          Microretos disponibles
        </h2>
      </div>

      <!-- Sin retos -->
      <div v-if="retos.length === 0" class="text-center py-24">
        <p class="text-4xl mb-4">📭</p>
        <p style="font-size: 1rem; font-weight: 600; color: #374151;">Sin microretos todavía</p>
        <p style="font-size: 0.875rem; color: #9ca3af; margin-top: 6px;">Pronto habrá contenido para esta familia.</p>
      </div>

      <!-- Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        <div
          v-for="(reto, i) in retos"
          :key="reto.id"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 400, delay: i * 80 } }"
        >
          <MicroretoCard
            :reto="reto"
            :familia="familia"
          />
        </div>
      </div>

    </section>

  </div>
</template>
