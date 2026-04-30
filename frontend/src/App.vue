<template>
  <div class="min-h-screen bg-gray-100 py-10">
    
    <FormularioChatbot />

  </div>
</template>

<script setup>
// Aquí le decimos a App.vue DÓNDE encontrar a tu actor (importamos el archivo)
import FormularioChatbot from './components/FormularioChatbot.vue'
</script>

<style>
/* Podemos dejar esto vacío, Tailwind se encarga de todo el diseño */
</style>