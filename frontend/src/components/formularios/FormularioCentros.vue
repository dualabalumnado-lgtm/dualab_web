<template>
  <div>
    <!-- Success state -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div v-if="enviado" class="flex flex-col items-center justify-center px-8 py-16 text-center">
        <div class="relative mb-6">
          <div class="w-20 h-20 bg-brand-light/20 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div class="absolute inset-0 w-20 h-20 bg-brand-light/20 rounded-full animate-ping opacity-40"></div>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">¡Solicitud enviada!</h3>
        <p class="text-gray-500 leading-relaxed max-w-sm mx-auto text-sm">
          Gracias por interesarte en Dualab. Nos pondremos en contacto contigo próximamente.
        </p>
        <button
          @click="$emit('cerrar')"
          class="mt-8 px-8 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors duration-200 text-sm"
        >
          Cerrar
        </button>
      </div>
    </Transition>

    <!-- Form -->
    <div v-if="!enviado">
      <!-- Header -->
      <div class="relative bg-gradient-to-br from-green-800 via-teal-800 to-green-900 px-8 py-8 rounded-t-2xl overflow-hidden">
        <div class="absolute inset-0 opacity-[0.07]"
          style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-brand-light/15 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"></div>

        <button
          @click="$emit('cerrar')"
          class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all"
          aria-label="Cerrar"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="relative">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-brand-light text-xs font-semibold rounded-full border border-white/10 mb-4">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            Centros Educativos
          </span>
          <h2 class="text-2xl font-bold text-white mb-2">
            Conecta tu centro con retos reales y empresas
          </h2>
          <p class="text-white/65 text-sm leading-relaxed max-w-md">
            Déjanos tus datos y te mostraremos cómo Dualab puede integrarse en la formación del alumnado.
          </p>
        </div>
      </div>

      <!-- Form body -->
      <form @submit.prevent="enviarFormulario" class="px-8 py-7 space-y-5">

        <!-- Error -->
        <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <svg class="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <p class="text-red-700 text-sm">{{ error }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              Nombre del centro <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.nombre_centro"
              type="text"
              required
              placeholder="Ej: IES Tecnológico de Madrid"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              Persona de contacto <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.persona_contacto"
              type="text"
              required
              placeholder="Nombre y apellidos"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">Cargo</label>
            <input
              v-model="form.cargo"
              type="text"
              placeholder="Ej: Jefe de estudios, Coordinador FCT…"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              Email <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="centro@educacion.es"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">Teléfono</label>
            <input
              v-model="form.telefono"
              type="tel"
              placeholder="+34 900 000 000"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">Ciclos formativos</label>
            <input
              v-model="form.ciclos"
              type="text"
              placeholder="Ej: DAM, DAW, ASIR, SMR…"
              class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5">
              Número aproximado de alumnos
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                v-for="rango in rangosAlumnos"
                :key="rango.value"
                type="button"
                @click="form.num_alumnos = rango.value"
                :class="[
                  'px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-center',
                  form.num_alumnos === rango.value
                    ? 'bg-brand-primary border-brand-primary text-white shadow-sm shadow-brand-primary/30'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-brand-primary/50 hover:text-brand-dark hover:bg-green-50/50'
                ]"
              >
                {{ rango.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="cargando"
          class="w-full py-4 bg-brand-primary text-white font-bold rounded-xl text-sm hover:bg-brand-dark active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/25"
        >
          <svg v-if="cargando" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          <span>{{ cargando ? 'Enviando…' : 'Solicitar información' }}</span>
        </button>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

defineEmits(['cerrar'])

const form = ref({
  nombre_centro: '',
  persona_contacto: '',
  cargo: '',
  email: '',
  telefono: '',
  ciclos: '',
  num_alumnos: ''
})

const cargando = ref(false)
const enviado = ref(false)
const error = ref(null)

const rangosAlumnos = [
  { value: 'menos_50', label: 'Menos de 50' },
  { value: '50_150', label: '50 – 150' },
  { value: '150_300', label: '150 – 300' },
  { value: 'mas_300', label: 'Más de 300' }
]

const enviarFormulario = async () => {
  error.value = null
  cargando.value = true
  try {
    await axios.post('http://dualab_web.test/backend/public/api/formulario-centros', form.value)
    enviado.value = true
  } catch (err) {
    console.error('Error al enviar formulario centros:', err)
    error.value = 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.'
  } finally {
    cargando.value = false
  }
}
</script>
