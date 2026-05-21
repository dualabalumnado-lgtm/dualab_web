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
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div class="absolute inset-0 w-20 h-20 bg-brand-primary/10 rounded-full animate-ping opacity-40"></div>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">¡Bienvenido/a a Dualab!</h3>
        <p class="text-gray-500 leading-relaxed max-w-sm mx-auto text-sm">
          Gracias por unirte a Dualab. Te contactaremos con más información.
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
      <div class="relative bg-gradient-to-br from-gray-800 via-gray-900 to-brand-dark px-8 py-8 rounded-t-2xl overflow-hidden">
        <div class="absolute inset-0 opacity-[0.07]"
          style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
        </div>
        <div class="absolute bottom-0 left-0 w-72 h-32 bg-brand-primary/15 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"></div>

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
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-gray-200 text-xs font-semibold rounded-full border border-white/10 mb-4">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Alumnos
          </span>
          <h2 class="text-2xl font-bold text-white mb-2">
            Participa en proyectos y retos reales
          </h2>
          <p class="text-white/65 text-sm leading-relaxed max-w-md">
            Conecta con empresas, mejora tus habilidades y participa en experiencias reales desde el aula.
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
          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
              Nombre y apellidos <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.nombre"
              type="text"
              required
              placeholder="Tu nombre completo"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
              Email <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="tu@email.com"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Teléfono</label>
            <input
              v-model="form.telefono"
              type="tel"
              placeholder="+34 600 000 000"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Centro educativo</label>
            <input
              v-model="form.centro"
              type="text"
              placeholder="Nombre de tu instituto o FP"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Ciclo formativo</label>
            <input
              v-model="form.ciclo"
              type="text"
              placeholder="Ej: DAM, DAW, ASIR, SMR…"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Curso actual</label>
            <div class="flex gap-2">
              <button
                v-for="curso in cursos"
                :key="curso.value"
                type="button"
                @click="form.curso = curso.value"
                :class="[
                  'flex-1 py-3 rounded-xl text-sm font-medium border transition-all text-center',
                  form.curso === curso.value
                    ? 'bg-brand-primary border-brand-primary text-white shadow-sm shadow-brand-primary/30'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary/50 hover:text-brand-dark hover:bg-green-50/50'
                ]"
              >
                {{ curso.label }}
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
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
          </svg>
          <span>{{ cargando ? 'Enviando…' : 'Quiero participar' }}</span>
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
  nombre: '',
  email: '',
  telefono: '',
  centro: '',
  ciclo: '',
  curso: ''
})

const cargando = ref(false)
const enviado = ref(false)
const error = ref(null)

const cursos = [
  { value: '1', label: '1.º año' },
  { value: '2', label: '2.º año' }
]

const enviarFormulario = async () => {
  error.value = null
  cargando.value = true
  try {
    await axios.post('http://dualab_web.test/backend/public/api/formulario-alumnos', form.value)
    enviado.value = true
  } catch (err) {
    console.error('Error al enviar formulario alumnos:', err)
    error.value = 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.'
  } finally {
    cargando.value = false
  }
}
</script>
