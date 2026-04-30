<script setup>
const emitirSeleccion = (rol) => {
  // avisamos al componente padre (App.vue)
  emit('seleccionar', rol)
}

const emit = defineEmits(['seleccionar'])
</script>

<template>
  <div style="background: #000; min-height: 100vh; color: white; padding: 40px; text-align: center;">

    <h1 style="color: #AEE565;">¿Quién eres?</h1>
    <p style="color: #C6D8C6;">Elige una opción para empezar</p>

    <div style="display: flex; gap: 20px; justify-content: center; margin-top: 40px;">

      <div @click="emitirSeleccion('estudiante')" style="cursor: pointer;">
        🎓 Estudiante
      </div>

      <div @click="emitirSeleccion('centro')" style="cursor: pointer;">
        🏫 Centro
      </div>

      <div @click="emitirSeleccion('empresa')" style="cursor: pointer;">
        🏢 Empresa
      </div>

    </div>

  </div>
</template>