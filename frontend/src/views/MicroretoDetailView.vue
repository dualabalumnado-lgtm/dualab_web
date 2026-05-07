<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Sprout, Zap, Flame, Target, BookOpen, ArrowLeft } from "lucide-vue-next"
import { microretos } from "../data/mock"

const route  = useRoute()
const router = useRouter()

const reto = computed(() => microretos.find(r => r.id === Number(route.params.id)))

const dificultad = computed(() => ({
  "Básico":     { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", icon: Sprout },
  "Intermedio": { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",         icon: Zap    },
  "Avanzado":   { badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",                 icon: Flame  },
}[reto.value?.dificultad] ?? { badge: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400", icon: null }))
</script>

<template>
  <div v-if="reto" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-3xl mx-auto px-6 py-10">

      <!-- Volver -->
      <button
        class="btn btn-ghost flex items-center gap-2 text-sm text-brand-dark hover:text-brand-primary dark:text-gray-400 dark:hover:text-green-400 mb-8"
        @click="router.back()"
      >
        <ArrowLeft :size="16" />
        Volver
      </button>

      <!-- Cabecera -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-6">
        <span
          class="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full mb-4"
          :class="dificultad.badge"
        >
          <component :is="dificultad.icon" :size="12" />
          {{ reto.dificultad }}
        </span>

        <h1 class="text-2xl font-bold text-brand-dark mb-3">
          {{ reto.titulo }}
        </h1>

        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ reto.descripcion }}
        </p>
      </div>

      <!-- Objetivos -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-6">
        <div class="flex items-center gap-2 mb-4">
          <Target :size="20" class="text-brand-primary" />
          <h2 class="text-lg font-semibold text-brand-dark">Objetivos</h2>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(obj, i) in reto.objetivos"
            :key="i"
            class="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
          >
            <span class="mt-1.5 w-2 h-2 rounded-full bg-brand-primary shrink-0"></span>
            {{ obj }}
          </li>
        </ul>
      </div>

      <!-- Recursos -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
        <div class="flex items-center gap-2 mb-4">
          <BookOpen :size="20" class="text-brand-primary" />
          <h2 class="text-lg font-semibold text-brand-dark">Recursos necesarios</h2>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(rec, i) in reto.recursos"
            :key="i"
            class="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
          >
            <span class="mt-1.5 w-2 h-2 rounded-full bg-brand-light shrink-0"></span>
            {{ rec }}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
