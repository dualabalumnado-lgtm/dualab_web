<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
    <div
      class="absolute inset-0 bg-black/70 backdrop-blur-sm"
      @click="$emit('close')"
    ></div>

    <Transition
      appear
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-5 scale-[0.97]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
    >
      <div class="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl scrollbar-thin">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
