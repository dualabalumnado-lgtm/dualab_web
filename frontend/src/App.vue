<script setup>
import { ref } from 'vue'
import Dashboard from './components/Dashboard.vue'
import PantallaInicio from './Modules/landing/PantallaInicio.vue'

const pantalla = ref('inicio')
const rol = ref(null)

// cuando clicas en una card
const irFormulario = (r) => {
  rol.value = r
  pantalla.value = 'formulario'
}

// botón login
const irLogin = () => {
  pantalla.value = 'login'
}

// cuando termine login
const irDashboard = () => {
  pantalla.value = 'dashboard'
}

//  después de formulario → pantalla gracias
const irGracias = () => {
  pantalla.value = 'gracias'
}
</script>

<template>
  <PantallaInicio 
    v-if="pantalla === 'inicio'" 
    @login="irLogin"
    @formulario="irFormulario"
  />

  <!-- LOGIN -->
  <Login 
    v-else-if="pantalla === 'login'"
    @loginSuccess="irDashboard"
  />

  <!-- FORMULARIOS -->
  <FormEstudiante 
    v-else-if="pantalla === 'formulario' && rol === 'estudiante'"
    @formSuccess="irGracias"
  />

  <FormCentro 
    v-else-if="pantalla === 'formulario' && rol === 'centro'"
    @formSuccess="irGracias"
  />

  <FormEmpresa 
    v-else-if="pantalla === 'formulario' && rol === 'empresa'"
    @formSuccess="irGracias"
  />

  <!-- GRACIAS -->
  <div v-else-if="pantalla === 'gracias'">
    <h2>Gracias 🙌</h2>
  </div>

  <!-- DASHBOARD -->
  <Dashboard 
    v-else 
    :rol="rol"
  />
</template>