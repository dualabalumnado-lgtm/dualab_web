<script setup>
import FamiliaCard from "../components/FamiliaCard.vue"
import { familias } from "../data/mock"
import { useRouter } from "vue-router"

const router = useRouter()

const go = (id) => {
  router.push(`/familia/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">

    <div class="max-w-7xl mx-auto px-6 py-10">

      <!-- Header -->
      <div class="mb-10 flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-brand-dark">
            Explora familias profesionales
          </h1>
          <p class="text-brand-glass mt-2">
            Encuentra microretos alineados con cada área
          </p>
        </div>

        <button class="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-2xl shadow-md transition">
          Explorar retos
        </button>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <FamiliaCard
          v-for="f in familias"
          :key="f.id"
          :familia="f"
          @click="go(f.id)"
        />
      </div>

    </div>
  </div>
</template>
