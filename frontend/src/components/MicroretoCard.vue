<script setup>
import { Sprout, Zap, Flame } from "lucide-vue-next"
import { computed } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({ reto: Object })
const router = useRouter()

const dificultad = computed(() => ({
  "Básico":     { badge: "bg-emerald-100 text-emerald-700", icon: Sprout },
  "Intermedio": { badge: "bg-amber-100 text-amber-700",     icon: Zap    },
  "Avanzado":   { badge: "bg-red-100 text-red-700",         icon: Flame  },
}[props.reto.dificultad] ?? { badge: "bg-gray-100 text-gray-600", icon: null }))
</script>

<template>
  <div
    class="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer flex flex-col gap-3"
    @click="router.push(`/reto/${reto.id}`)"
  >
    <h3 class="font-semibold text-base leading-snug">
      {{ reto.titulo }}
    </h3>

    <p class="text-sm text-gray-500 leading-relaxed flex-1">
      {{ reto.descripcion }}
    </p>

    <span
      class="self-start inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
      :class="dificultad.badge"
    >
      <component :is="dificultad.icon" :size="12" />
      {{ reto.dificultad }}
    </span>
  </div>
</template>
