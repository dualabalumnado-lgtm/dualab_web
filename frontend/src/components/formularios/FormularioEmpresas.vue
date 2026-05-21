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
          <div class="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div class="absolute inset-0 w-20 h-20 bg-brand-primary/10 rounded-full animate-ping opacity-40"></div>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">¡Propuesta recibida!</h3>
        <p class="text-gray-500 leading-relaxed max-w-sm mx-auto text-sm">
          Gracias por contactar con Dualab. Nuestro equipo revisará tu propuesta y se pondrá en contacto contigo.
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
      <div class="relative bg-gradient-to-br from-brand-dark via-green-800 to-green-900 px-8 py-8 rounded-t-2xl overflow-hidden">
        <div class="absolute inset-0 opacity-[0.07]"
          style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"></div>

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
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            Empresas
          </span>
          <h2 class="text-2xl font-bold text-white mb-2">
            Impulsa innovación real con Dualab
          </h2>
          <p class="text-white/65 text-sm leading-relaxed max-w-md">
            Cuéntanos qué necesidad o reto tiene tu empresa y nuestro equipo valorará posibles líneas de colaboración.
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

        <!-- Basic fields 2-col -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
              Empresa <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.empresa"
              type="text"
              required
              placeholder="Ej: Tech Solutions S.L."
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

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
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Cargo</label>
            <input
              v-model="form.cargo"
              type="text"
              placeholder="Ej: CTO, Director de Innovación…"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
              Email profesional <span class="text-brand-primary normal-case tracking-normal">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="contacto@empresa.com"
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
            <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Sector</label>
            <input
              v-model="form.sector"
              type="text"
              placeholder="Ej: Tecnología, Logística, Retail…"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <!-- Featured reto section -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50/60 rounded-2xl p-5 border border-green-100">
          <div class="mb-3">
            <h3 class="text-sm font-bold text-gray-900 mb-0.5">
              ¿Qué proceso, necesidad o reto te gustaría mejorar en tu empresa?
              <span class="text-brand-primary">*</span>
            </h3>
            <p class="text-xs text-gray-400">Cuéntanoslo con tus palabras. Puedes usar las sugerencias como punto de partida.</p>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-3">
            <button
              v-for="hint in hints"
              :key="hint"
              type="button"
              @click="insertarHint(hint)"
              class="px-2.5 py-1 bg-white text-xs text-gray-500 rounded-full border border-gray-200 hover:border-brand-primary/60 hover:text-brand-dark hover:bg-white transition-all"
            >
              {{ hint }}
            </button>
          </div>

          <textarea
            v-model="form.reto"
            ref="textareaRef"
            rows="5"
            required
            placeholder="Describe el proceso, necesidad o reto que quieres abordar…"
            class="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm leading-relaxed focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all resize-none"
          ></textarea>
        </div>

        <!-- Plazo -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
            ¿En qué plazo te gustaría abordar esta necesidad?
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              v-for="opcion in plazos"
              :key="opcion.value"
              type="button"
              @click="form.plazo = opcion.value"
              :class="[
                'px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-center leading-tight',
                form.plazo === opcion.value
                  ? 'bg-brand-primary border-brand-primary text-white shadow-sm shadow-brand-primary/30'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary/50 hover:text-brand-dark hover:bg-green-50/50'
              ]"
            >
              {{ opcion.label }}
            </button>
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
          <span>{{ cargando ? 'Enviando…' : 'Solicitar valoración' }}</span>
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
  empresa: '',
  nombre: '',
  cargo: '',
  email: '',
  telefono: '',
  sector: '',
  reto: '',
  plazo: ''
})

const cargando = ref(false)
const enviado = ref(false)
const error = ref(null)
const textareaRef = ref(null)

const hints = [
  'Automatización de tareas',
  'Mejora de procesos',
  'IA aplicada',
  'Organización interna',
  'Digitalización',
  'Atención al cliente',
  'Desarrollo web',
  'Datos y análisis'
]

const plazos = [
  { value: 'explorando', label: 'Solo explorando ideas' },
  { value: 'proximos_meses', label: 'Próximos meses' },
  { value: 'este_trimestre', label: 'Este trimestre' },
  { value: 'lo_antes_posible', label: 'Lo antes posible' }
]

const insertarHint = (hint) => {
  form.value.reto = form.value.reto
    ? `${form.value.reto}\n• ${hint}`
    : `• ${hint}`
  textareaRef.value?.focus()
}

const enviarFormulario = async () => {
  error.value = null
  cargando.value = true
  try {
    await axios.post('http://dualab_web.test/backend/public/api/formulario-empresas', form.value)
    enviado.value = true
  } catch (err) {
    console.error('Error al enviar formulario empresas:', err)
    error.value = 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.'
  } finally {
    cargando.value = false
  }
}
</script>
