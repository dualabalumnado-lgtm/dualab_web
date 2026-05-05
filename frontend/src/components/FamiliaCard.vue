<script setup>
defineProps({
  familia: Object
})
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3]"
  >
    <!-- Imagen -->
    <img
      :src="familia.imagen"
      :alt="familia.nombre"
      class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
    />

    <!-- Degradado inferior -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    <!-- Nombre -->
    <div class="absolute bottom-0 left-0 right-0 p-4">
      <h3 class="text-white text-sm font-semibold leading-tight drop-shadow">
        {{ familia.nombre }}
      </h3>
    </div>
  </div>
</template>
