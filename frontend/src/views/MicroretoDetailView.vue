<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Sprout, Zap, Flame, Target, BookOpen, ArrowLeft, Package } from "lucide-vue-next"
import { getMicroreto } from "../services/api"

const route  = useRoute()
const router = useRouter()

const reto = ref(null)

onMounted(async () => {
  reto.value = await getMicroreto(route.params.id)
})

const nivel = computed(() => ({
  "Básico":     { dot: "#10b981", text: "#059669", bg: "rgba(16,185,129,0.15)",  border: "rgba(16,185,129,0.3)",  icon: Sprout, accent: "#10b981" },
  "Intermedio": { dot: "#f59e0b", text: "#d97706", bg: "rgba(245,158,11,0.15)",  border: "rgba(245,158,11,0.3)",  icon: Zap,    accent: "#f59e0b" },
  "Avanzado":   { dot: "#ef4444", text: "#dc2626", bg: "rgba(239,68,68,0.15)",   border: "rgba(239,68,68,0.3)",   icon: Flame,  accent: "#ef4444" },
}[reto.value?.dificultad] ?? { dot: "#9ca3af", text: "#6b7280", bg: "rgba(156,163,175,0.15)", border: "rgba(156,163,175,0.3)", icon: null, accent: "#9ca3af" }))
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" style="background: linear-gradient(135deg, #f0f5ea 0%, #ffffff 45%, #f5f8fb 100%);">

    <!-- ── LOADING ───────────────────────────────────────────── -->
    <div v-if="!reto" class="flex items-center justify-center min-h-screen">
      <div class="text-gray-400 text-sm animate-pulse">Cargando reto…</div>
    </div>

    <template v-else>

      <!-- ── HERO con imagen de familia ───────────────────────── -->
      <section class="relative h-[380px] overflow-hidden">

        <!-- Imagen de fondo (familia) -->
        <img
          v-if="reto.familia?.imagen"
          :src="reto.familia.imagen"
          :alt="reto.familia.nombre"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- Fallback sin imagen -->
        <div
          v-else
          class="absolute inset-0"
          style="background: linear-gradient(135deg, #1a2e1a, #2d4a1e)"
        />

        <!-- Overlay gradiente -->
        <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.12) 100%)" />

        <!-- Contenido del hero -->
        <div class="absolute inset-0 flex flex-col justify-between max-w-5xl mx-auto px-6 py-8">

          <!-- Botón volver -->
          <button
            class="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200 w-fit"
            @click="router.back()"
          >
            <ArrowLeft :size="16" />
            Volver
          </button>

          <!-- Info del reto -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <!-- Breadcrumb familia -->
            <div v-if="reto.familia" class="flex items-center gap-2 mb-4">
              <span style="font-size: 1.1rem; line-height:1; filter: drop-shadow(0 1px 4px rgba(0,0,0,0.4));">
                {{ reto.familia.icono }}
              </span>
              <span style="color: rgba(255,255,255,0.75); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;">
                {{ reto.familia.nombre }}
              </span>
            </div>

            <!-- Badge dificultad -->
            <div
              class="inline-flex items-center gap-1.5 mb-4"
              :style="`
                background: ${nivel.bg};
                border: 1px solid ${nivel.border};
                border-radius: 999px;
                padding: 5px 14px;
                backdrop-filter: blur(8px);
              `"
            >
              <component :is="nivel.icon" :size="12" :style="`color: ${nivel.text}`" />
              <span :style="`color: ${nivel.text}; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;`">
                {{ reto.dificultad }}
              </span>
            </div>

            <!-- Título -->
            <h1 style="
              font-size: clamp(1.6rem, 3.5vw, 2.4rem);
              font-weight: 800;
              letter-spacing: -0.02em;
              line-height: 1.15;
              color: #fff;
              text-shadow: 0 2px 16px rgba(0,0,0,0.35);
              max-width: 680px;
              margin-bottom: 12px;
            ">
              {{ reto.titulo }}
            </h1>

            <!-- Descripción -->
            <p style="
              color: rgba(255,255,255,0.82);
              font-size: 0.95rem;
              line-height: 1.6;
              max-width: 560px;
            ">
              {{ reto.descripcion }}
            </p>
          </div>
        </div>
      </section>

      <!-- ── CUERPO ─────────────────────────────────────────────── -->
      <section class="max-w-5xl mx-auto px-6 py-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- ── OBJETIVOS ───────────────────── -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 120 } }"
            class="detail-card"
          >
            <!-- Cabecera -->
            <div class="flex items-center gap-3 mb-7">
              <div class="icon-wrap" style="background: rgba(22,163,74,0.1); border-color: rgba(22,163,74,0.2);">
                <Target :size="17" style="color: #16a34a;" />
              </div>
              <div>
                <p class="section-label">Lo que aprenderás</p>
                <h2 class="section-title">Objetivos</h2>
              </div>
              <span class="count-badge ml-auto" style="background: rgba(22,163,74,0.08); color: #15803d; border-color: rgba(22,163,74,0.2);">
                {{ reto.objetivos?.length }}
              </span>
            </div>

            <!-- Lista -->
            <ol class="space-y-4">
              <li
                v-for="(obj, i) in reto.objetivos"
                :key="i"
                class="obj-item"
                :style="`animation-delay: ${i * 60}ms`"
              >
                <span class="obj-number" style="background: rgba(22,163,74,0.1); color: #16a34a; border-color: rgba(22,163,74,0.25);">
                  {{ i + 1 }}
                </span>
                <span class="obj-text">{{ obj }}</span>
              </li>
            </ol>
          </div>

          <!-- ── RECURSOS ─────────────────────── -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 220 } }"
            class="detail-card"
          >
            <!-- Cabecera -->
            <div class="flex items-center gap-3 mb-7">
              <div class="icon-wrap" style="background: rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.2);">
                <BookOpen :size="17" style="color: #6366f1;" />
              </div>
              <div>
                <p class="section-label">Material necesario</p>
                <h2 class="section-title">Recursos</h2>
              </div>
              <span class="count-badge ml-auto" style="background: rgba(99,102,241,0.08); color: #4f46e5; border-color: rgba(99,102,241,0.2);">
                {{ reto.recursos?.length }}
              </span>
            </div>

            <!-- Lista -->
            <ul class="space-y-3">
              <li
                v-for="(rec, i) in reto.recursos"
                :key="i"
                class="rec-item"
                :style="`animation-delay: ${i * 60}ms`"
              >
                <div class="rec-icon">
                  <Package :size="13" style="color: #6366f1;" />
                </div>
                <span class="rec-text">{{ rec }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- ── META STATS ───────────────────────────────────────── -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 500 } }"
          class="meta-strip mt-6"
        >
          <div class="meta-item">
            <component :is="nivel.icon" :size="15" :style="`color: ${nivel.accent}`" />
            <span>Nivel <strong>{{ reto.dificultad }}</strong></span>
          </div>
          <div class="meta-sep" />
          <div class="meta-item">
            <Target :size="15" style="color: #16a34a;" />
            <span><strong>{{ reto.objetivos?.length }}</strong> objetivos</span>
          </div>
          <div class="meta-sep" />
          <div class="meta-item">
            <BookOpen :size="15" style="color: #6366f1;" />
            <span><strong>{{ reto.recursos?.length }}</strong> recursos</span>
          </div>
          <div v-if="reto.familia" class="meta-sep" />
          <div v-if="reto.familia" class="meta-item">
            <span style="font-size: 1rem; line-height: 1;">{{ reto.familia.icono }}</span>
            <span>{{ reto.familia.nombre }}</span>
          </div>
        </div>

      </section>
    </template>
  </div>
</template>

<style scoped>
/* ── Cards ─────────────────────────────────────────────── */
.detail-card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 24px;
  padding: 32px;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 6px 20px rgba(0,0,0,0.05),
    inset 0 1px 0 rgba(255,255,255,0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* ── Icon wrap ──────────────────────────────────────────── */
.icon-wrap {
  width: 40px; height: 40px;
  border-radius: 12px;
  border: 1px solid;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* ── Section labels ─────────────────────────────────────── */
.section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 1px;
}
.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

/* ── Count badge ────────────────────────────────────────── */
.count-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid;
}

/* ── Objetivo item ──────────────────────────────────────── */
.obj-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.obj-number {
  width: 24px; height: 24px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 11px;
  font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}
.obj-text {
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.6;
}

/* ── Recurso item ───────────────────────────────────────── */
.rec-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 12px;
  background: rgba(99,102,241,0.04);
  border: 1px solid rgba(99,102,241,0.08);
  transition: background 0.18s, border-color 0.18s;
}
.rec-item:hover {
  background: rgba(99,102,241,0.08);
  border-color: rgba(99,102,241,0.16);
}
.rec-icon {
  width: 28px; height: 28px;
  border-radius: 8px;
  background: rgba(99,102,241,0.1);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.rec-text {
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.55;
  padding-top: 4px;
}

/* ── Meta strip ─────────────────────────────────────────── */
.meta-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 16px;
  padding: 14px 24px;
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9);
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: #6b7280;
  padding: 4px 16px 4px 0;
}
.meta-item strong {
  color: #111827;
  font-weight: 700;
}
.meta-sep {
  width: 1px;
  height: 18px;
  background: rgba(0,0,0,0.1);
  margin-right: 16px;
  flex-shrink: 0;
}

/* ── Animación items de lista ───────────────────────────── */
.obj-item,
.rec-item {
  animation: fadeSlide 0.35s ease both;
}

@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
