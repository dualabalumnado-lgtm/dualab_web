<script setup>
defineProps({
  familia: Object
})
</script>

<template>
  <div
    class="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <!-- Icono -->
    <div
      class="w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-white text-xl bg-brand-primary group-hover:scale-110 transition"
    >
      {{ familia.icono }}
    </div>

    <!-- Texto -->
    <h3 class="text-sm font-semibold text-gray-800 leading-tight">
      {{ familia.nombre }}
    </h3>

    <!-- Línea decorativa -->
    <div class="mt-3 h-1 w-0 bg-brand-light group-hover:w-10 transition-all duration-300 rounded-full"></div>
  </div>
</template>
