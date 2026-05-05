<script setup>
import { useRoute } from "vue-router"
import { microretos } from "../data/mock"
import MicroretoCard from "../components/MicroretoCard.vue"

const route = useRoute()
const id = Number(route.params.id)

const retos = microretos.filter(r => r.familiaId === id)
</script>

<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">
      Microretos
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MicroretoCard
        v-for="r in retos"
        :key="r.id"
        :reto="r"
      />
    </div>
  </div>
</template>
