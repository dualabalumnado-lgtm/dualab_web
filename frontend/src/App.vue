<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import PantallaInicio from './Modules/landing/PantallaInicio.vue'
import AppNavbar from './components/AppNavbar.vue'

const route  = useRoute()
const router = useRouter()

const pantalla = ref('inicio')
const rol = ref(null)

const irFormulario = (r) => {
  rol.value = r
  pantalla.value = 'formulario'
}

const irLogin = () => {
  pantalla.value = 'login'
}

const irDashboard = () => {
  pantalla.value = 'dashboard'
}

const irGracias = () => {
  pantalla.value = 'gracias'
}

const irFamilias = () => {
  router.push('/familias')
}
</script>

<template>
  <AppNavbar />

  <!-- Rutas del router (familias, sector, microretos…) -->
  <router-view v-if="route.path !== '/'" />

  <!-- Máquina de estados de la landing (solo en '/') -->
  <template v-else>
    <PantallaInicio
      v-if="pantalla === 'inicio'"
      @login="irLogin"
      @formulario="irFormulario"
    />

    <Login
      v-else-if="pantalla === 'login'"
      @loginSuccess="irDashboard"
    />

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

    <div v-else-if="pantalla === 'gracias'">
      <h2>Gracias 🙌</h2>
    </div>

    <Dashboard
      v-else
      :rol="rol"
      @irFamilias="irFamilias"
    />
  </template>
</template>