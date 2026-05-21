<script setup>
import FamiliaCard from '../components/FamiliaCard.vue'

const familias = [
  { id: 1, nombre: 'Administración y Gestión', icono: '📋', color: 'bg-blue-500' },
  { id: 2, nombre: 'Comercio y Marketing', icono: '🛒', color: 'bg-yellow-500' },
  { id: 3, nombre: 'Edificación y Obra Civil', icono: '🏗️', color: 'bg-orange-500' },
  { id: 4, nombre: 'Electricidad y Electrónica', icono: '⚡', color: 'bg-amber-500' },
  { id: 5, nombre: 'Hostelería y Turismo', icono: '🍽️', color: 'bg-red-500' },
  { id: 6, nombre: 'Imagen Personal', icono: '💇', color: 'bg-pink-500' },
  { id: 7, nombre: 'Informática y Comunicaciones', icono: '💻', color: 'bg-indigo-500' },
  { id: 8, nombre: 'Instalación y Mantenimiento', icono: '🔧', color: 'bg-gray-500' },
  { id: 9, nombre: 'Sanidad', icono: '🏥', color: 'bg-emerald-500' },
  { id: 10, nombre: 'Servicios Socioculturales', icono: '🤝', color: 'bg-teal-500' },
  { id: 11, nombre: 'Transporte y Mantenimiento de Vehículos', icono: '🚗', color: 'bg-cyan-500' },
  { id: 12, nombre: 'Agraria', icono: '🌱', color: 'bg-green-600' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Familias Profesionales</h1>
      <p class="text-gray-500 mb-10">Selecciona una familia profesional para explorar sus ciclos formativos</p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <FamiliaCard
          v-for="familia in familias"
          :key="familia.id"
          :familia="familia"
        />
      </div>
    </div>
  </div>
</template>
