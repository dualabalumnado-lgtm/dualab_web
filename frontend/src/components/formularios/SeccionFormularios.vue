<template>
  <section class="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">

    <!-- Decorative background blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-40 -right-32 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-[500px] h-64 bg-brand-dark/15 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-light text-sm font-semibold rounded-full border border-brand-primary/20 mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          Únete a Dualab
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          ¿Con quién queremos
          <br class="hidden sm:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">
            trabajar juntos?
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Conectamos empresas con talento real. Cuéntanos quién eres y construyamos algo juntos.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">

        <!-- Card: Empresas -->
        <button
          @click="abrirModal('empresas')"
          class="group text-left w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          <div class="h-full p-7 bg-white/[0.04] border border-white/[0.08] rounded-2xl transition-all duration-300 hover:border-brand-primary/40 hover:bg-white/[0.06] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col">
            <div class="w-12 h-12 bg-brand-primary/15 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-primary/25 group-hover:scale-110">
              <svg class="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-2">Empresas</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Convierte tus retos reales en proyectos resueltos por talento joven y comprometido.
              </p>
            </div>
            <div class="flex items-center text-brand-primary text-sm font-semibold mt-6 pt-5 border-t border-white/5">
              <span>Explorar colaboración</span>
              <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </button>

        <!-- Card: Centros Educativos -->
        <button
          @click="abrirModal('centros')"
          class="group text-left w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          <div class="h-full p-7 bg-white/[0.04] border border-white/[0.08] rounded-2xl transition-all duration-300 hover:border-brand-light/40 hover:bg-white/[0.06] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-light/10 flex flex-col">
            <div class="w-12 h-12 bg-brand-light/15 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-light/25 group-hover:scale-110">
              <svg class="w-6 h-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-2">Centros Educativos</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Integra proyectos reales en la formación y conecta a tu alumnado con empresas locales.
              </p>
            </div>
            <div class="flex items-center text-brand-light text-sm font-semibold mt-6 pt-5 border-t border-white/5">
              <span>Solicitar información</span>
              <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </button>

        <!-- Card: Alumnos -->
        <button
          @click="abrirModal('alumnos')"
          class="group text-left w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          <div class="h-full p-7 bg-white/[0.04] border border-white/[0.08] rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5 flex flex-col">
            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/15 group-hover:scale-110">
              <svg class="w-6 h-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-2">Alumnos</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Participa en retos reales, construye tu portfolio y conecta con empresas desde el aula.
              </p>
            </div>
            <div class="flex items-center text-gray-300 text-sm font-semibold mt-6 pt-5 border-t border-white/5">
              <span>Quiero participar</span>
              <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </button>

      </div>
    </div>

    <!-- Modals -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModal v-if="modalActivo === 'empresas'" @close="cerrarModal">
        <FormularioEmpresas @cerrar="cerrarModal" />
      </BaseModal>
    </Transition>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModal v-if="modalActivo === 'centros'" @close="cerrarModal">
        <FormularioCentros @cerrar="cerrarModal" />
      </BaseModal>
    </Transition>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModal v-if="modalActivo === 'alumnos'" @close="cerrarModal">
        <FormularioAlumnos @cerrar="cerrarModal" />
      </BaseModal>
    </Transition>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
import FormularioEmpresas from './FormularioEmpresas.vue'
import FormularioCentros from './FormularioCentros.vue'
import FormularioAlumnos from './FormularioAlumnos.vue'

const modalActivo = ref(null)

const abrirModal = (tipo) => {
  modalActivo.value = tipo
  document.body.style.overflow = 'hidden'
}

const cerrarModal = () => {
  modalActivo.value = null
  document.body.style.overflow = ''
}
</script>
