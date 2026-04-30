<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
    <h2 class="text-2xl font-bold mb-4 text-brand-dark">Reclutamiento de Empresas</h2>
    
    <form @submit.prevent="enviarFormulario" class="space-y-4">
      
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Nombre de la empresa <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="formulario.nombre_empresa" 
          type="text" 
          required
          pattern=".*[a-zA-ZáéíóúÁÉÍÓÚñÑ].*"
          title="El nombre debe contener al menos una letra."
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Ej: Tech Solutions S.L."
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">
          Email de contacto <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="formulario.email_contacto" 
          type="email" 
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Ej: contacto@empresa.com"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
        <input 
          v-model="formulario.telefono_contacto" 
          type="tel" 
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Ej: +34 600 000 000"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">
          Título del problema <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="formulario.titulo_problema" 
          type="text" 
          required
          minlength="5"
          title="Por favor, escribe un título un poco más descriptivo (mínimo 5 letras)."
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Ej: Crear un panel de administración"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">
          Descripción detallada <span class="text-red-500">*</span>
        </label>
        <textarea 
          v-model="formulario.descripcion_problema" 
          rows="4"
          required
          minlength="20"
          title="Por favor, explica un poco mejor el problema (mínimo 20 caracteres)."
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Explica qué necesitan que hagan los alumnos..."
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Tecnologías (Opcional)</label>
        <input 
          v-model="formulario.tecnologias" 
          type="text" 
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-light outline-none"
          placeholder="Ej: Vue, Laravel, Python..."
        >
      </div>

      <button 
        type="submit"
        class="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-dark transition"
      >
        Enviar Formulario 🚀
      </button>

    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import axios from 'axios' // 👈 Añadimos a nuestro cartero

const formulario = ref({
  nombre_empresa: '',
  email_contacto: '',
  telefono_contacto: '',
  titulo_problema: '',
  descripcion_problema: '',
  tecnologias: ''
})

// Le ponemos "async" porque enviar un paquete por internet tarda unos milisegundos
// y Vue tiene que "esperar" (await) a que el cartero vuelva con la respuesta.
const enviarFormulario = async () => {
  try {
    // ⚠️ ¡OJO AQUÍ! Tienes que poner la URL exacta de tu Laravel.
    // Si usas Laragon, suele ser el nombre de tu carpeta terminado en .test
    const urlDeTuBackend = 'http://dualab_web.test/backend/public/api/formulario-empresas'; 
    
    // Le decimos a Axios: "Haz un envío POST a esta URL con los datos del formulario"
    await axios.post(urlDeTuBackend, formulario.value);
    
    // Si llega hasta aquí, es que todo ha ido bien
    alert("¡Problema enviado con éxito! Nos pondremos en contacto pronto. 🚀");
    
    // Vaciamos el formulario para que quede como nuevo
    formulario.value = {
      nombre_empresa: '',
      email_contacto: '',
      telefono_contacto: '',
      titulo_problema: '',
      descripcion_problema: '',
      tecnologias: ''
    };

  } catch (error) {
    // Si el cartero tropieza o Laravel rechaza el paquete, caemos aquí
    console.error("Error al enviar el formulario:", error);
    alert("Vaya, hubo un problema al conectar con el servidor. Inténtalo de nuevo.");
  }
}
</script>