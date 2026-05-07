<script setup>
defineProps({
  familia: Object,
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="familia-card group relative overflow-hidden rounded-2xl cursor-pointer"
    :class="compact ? 'aspect-[3/2]' : 'aspect-[4/3]'"
  >
    <!-- Imagen protagonista -->
    <img
      :src="familia.imagen"
      :alt="familia.nombre"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />

    <!-- Gradiente sutil solo en la base — no tapa la imagen -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 42%)"
    />

    <!-- Glass pill — pequeño, bottom-left, ancho automático -->
    <div class="absolute bottom-3 left-3">
      <div style="
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 14px;
        padding: 7px 12px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border: 1px solid rgba(255,255,255,0.10);
      ">
        <span style="font-size: 13px; line-height: 1;">{{ familia.icono }}</span>
        <span style="color: #fff; font-size: 11px; font-weight: 600; letter-spacing: -0.01em; line-height: 1; white-space: nowrap;">
          {{ familia.nombre }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.familia-card {
  border: 1px solid rgba(255, 255, 255, 0);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
}
.familia-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.18),
    0 8px 16px rgba(0, 0, 0, 0.10);
  border-color: rgba(255, 255, 255, 0.28);
}
</style>
