<script setup>
import { Sprout, Zap, Flame, ArrowUpRight, Target } from "lucide-vue-next"
import { computed } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
  reto:     Object,
  familia:  Object,
  featured: { type: Boolean, default: false },
})

const router = useRouter()

const nivel = computed(() => ({
  "Básico":     { label: "Básico",     dot: "#10b981", text: "#059669", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.2)",  icon: Sprout },
  "Intermedio": { label: "Intermedio", dot: "#f59e0b", text: "#d97706", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)",  icon: Zap    },
  "Avanzado":   { label: "Avanzado",   dot: "#ef4444", text: "#dc2626", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.2)",   icon: Flame  },
}[props.reto.dificultad] ?? { label: "—", dot: "#9ca3af", text: "#6b7280", bg: "rgba(156,163,175,0.08)", border: "rgba(156,163,175,0.2)", icon: null }))
</script>

<template>
  <div
    class="reto-card group cursor-pointer flex flex-col"
    :class="featured ? 'p-8' : 'p-6'"
    @click="router.push(`/reto/${reto.id}`)"
  >
    <!-- Header -->
    <div class="flex items-start justify-between gap-3 mb-5">
      <!-- Badge dificultad -->
      <div
        class="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
        :style="`background:${nivel.bg}; border: 1px solid ${nivel.border};`"
      >
        <span class="w-1.5 h-1.5 rounded-full shrink-0" :style="`background:${nivel.dot}`" />
        <component :is="nivel.icon" :size="11" :style="`color:${nivel.text}`" />
        <span class="text-xs font-semibold" :style="`color:${nivel.text}`">{{ nivel.label }}</span>
      </div>

      <!-- Familia emoji -->
      <span v-if="familia" class="text-lg opacity-60 leading-none shrink-0" :title="familia.nombre">
        {{ familia.icono }}
      </span>
    </div>

    <!-- Título -->
    <h3
      class="font-bold text-gray-900 dark:text-white leading-snug tracking-tight mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-200"
      :class="featured ? 'text-2xl' : 'text-[15px]'"
    >
      {{ reto.titulo }}
    </h3>

    <!-- Descripción -->
    <p
      class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1"
      :class="featured ? 'line-clamp-3' : 'line-clamp-2'"
    >
      {{ reto.descripcion }}
    </p>

    <!-- Footer -->
    <div class="flex items-center justify-between mt-5 pt-4" style="border-top: 1px solid rgba(0,0,0,0.06);">
      <div class="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        <Target :size="12" />
        <span>{{ reto.objetivos?.length ?? 0 }} objetivos</span>
      </div>
      <div class="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
        Explorar <ArrowUpRight :size="13" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.reto-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 12px rgba(0,0,0,0.03),
    inset 0 1px 0 rgba(255,255,255,0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: transform 0.28s ease-out, box-shadow 0.28s ease-out, border-color 0.28s ease-out;
}

.reto-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0,0,0,0.04);
  box-shadow:
    0 20px 40px rgba(0,0,0,0.09),
    0 8px 20px rgba(0,0,0,0.05),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

.dark .reto-card {
  background: rgba(22, 26, 34, 0.80);
  border-color: rgba(255,255,255,0.07);
  box-shadow: 0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04);
}

.dark .reto-card:hover {
  border-color: rgba(255,255,255,0.10);
  box-shadow: 0 20px 40px rgba(0,0,0,0.45), 0 8px 20px rgba(0,0,0,0.25);
}

.dark [style*="border-top"] {
  border-top-color: rgba(255,255,255,0.06) !important;
}
</style>
