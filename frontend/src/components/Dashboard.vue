
<script setup>

import { ref, onMounted } from 'vue'

const props = defineProps({
  rol: String
})

const emit = defineEmits(['irFamilias'])

const leads = ref([])

onMounted(async () => {
    const response = await fetch('http://127.0.0.1:8000/api/leads')
    const data = await response.json()

    console.log('LEADS:', data)
    leads.value = data
})
</script>

<template>
  <div style="padding: 40px; background: #000; min-height: 100vh; color: white; font-family: sans-serif;">
    
    <div style="max-width: 800px; margin: auto;">

      <h1 v-if="props.rol === 'empresa'" style="color: #AEE565; margin-bottom: 10px;">
  Panel empresa
</h1>

<h1 v-if="props.rol === 'estudiante'" style="color: #AEE565; margin-bottom: 10px;">
  Explorar retos
</h1>

<h1 v-if="props.rol === 'centro'" style="color: #AEE565; margin-bottom: 10px;">
  Panel centro educativo
</h1>

      <p style="color: #C6D8C6; margin-bottom: 30px;">
        Crea y gestiona retos de forma simple
      </p>

      <div style="display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap;">
        <button style="
          background: linear-gradient(160deg, #59BF38, #AEE565);
          color: black;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 16px;
          border: none;
          cursor: pointer;
        ">
          🚀 Crear reto
        </button>

        <button
          @click="emit('irFamilias')"
          style="
            background: transparent;
            color: #AEE565;
            padding: 14px 20px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 16px;
            border: 1.5px solid #AEE565;
            cursor: pointer;
          "
        >
          🎓 Explorar familias profesionales →
        </button>
      </div>

      <!-- MÉTRICAS -->
      <div style="display: flex; gap: 20px; margin-bottom: 40px;">
        
        <div style="
          flex: 1;
          background: linear-gradient(160deg, #1F6935, #59BF38);
          padding: 20px;
          border-radius: 16px;
        ">
          <h3>Total retos</h3>
          <p style="font-size: 28px;">{{ leads.length }}</p>
        </div>

        <div style="
          flex: 1;
          background: linear-gradient(160deg, #59BF38, #AEE565);
          padding: 20px;
          border-radius: 16px;
          color: black;
        ">
          <h3>Nuevos hoy</h3>
          <p style="font-size: 28px;">
            {{ leads.filter(l => l.estado === 'nuevo').length }}
          </p>
        </div>

      </div>

      <!-- ESTADO VACÍO -->
      <div v-if="leads.length === 0" style="text-align: center; margin-top: 40px;">
        <p style="font-size: 18px;">No hay retos aún 👀</p>
        <p style="color: #C6D8C6; margin-bottom: 20px;">
          Empieza creando tu primer reto y prueba la experiencia
        </p>
        <button
          @click="emit('irFamilias')"
          style="
            background: linear-gradient(160deg, #1F6935, #59BF38);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 15px;
            border: none;
            cursor: pointer;
          "
        >
          Ver familias profesionales →
        </button>
      </div>

    </div>

  </div>
</template>