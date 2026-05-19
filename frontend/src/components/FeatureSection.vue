<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  badge:       { type: String,  required: true },
  title:       { type: String,  required: true },
  description: { type: String,  required: true },
  benefits:    { type: Array,   default: () => [] },
  buttonText:  { type: String,  required: true },
  image:       { type: String,  required: true },
  imageAlt:    { type: String,  default: '' },
  reverse:     { type: Boolean, default: false },
  accent:      { type: String,  default: '#59BF38' },
})

const emit = defineEmits(['cta'])

const sectionRef = ref(null)
const visible    = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.12 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="fs-section"
    :class="{ 'fs-section--visible': visible, 'fs-section--reverse': reverse }"
  >
    <div class="fs-inner">

      <!-- TEXT SIDE -->
      <div class="fs-text">
        <span class="fs-badge">{{ badge }}</span>
        <h2 class="fs-title" v-html="title"></h2>
        <p class="fs-desc">{{ description }}</p>

        <ul class="fs-benefits">
          <li v-for="(b, i) in benefits" :key="i" class="fs-benefit">
            <span class="fs-check">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.8 9.5L10 3" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>{{ b }}</span>
          </li>
        </ul>

        <button class="fs-cta" @click="emit('cta')">
          {{ buttonText }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="fs-cta-arrow">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- IMAGE SIDE -->
      <div class="fs-image-wrap">
        <div class="fs-image-glow" :style="{ background: `radial-gradient(ellipse at 50% 50%, ${accent}22 0%, transparent 70%)` }"></div>
        <img
          :src="image"
          :alt="imageAlt"
          class="fs-image"
          loading="lazy"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.fs-section {
  padding: 52px 40px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.fs-section--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fondo alterno suave */
.fs-section:nth-child(even) {
  background: rgba(240, 245, 234, 0.45);
  border-radius: 24px;
}

.fs-inner {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.fs-section--reverse .fs-inner {
  direction: rtl;
}

.fs-section--reverse .fs-inner > * {
  direction: ltr;
}

/* ─── TEXTO ──────────────────────────────────────────────── */
.fs-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.fs-badge {
  display: inline-block;
  background: rgba(89, 191, 56, 0.10);
  border: 1px solid rgba(89, 191, 56, 0.22);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #1F6935;
  margin-bottom: 22px;
}

.fs-title {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #111827;
  margin-bottom: 18px;
}

.fs-title :deep(em) {
  font-style: normal;
  background: linear-gradient(to right, #22c55e, #59BF38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fs-desc {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 32px;
  max-width: 480px;
}

/* ─── BENEFITS ───────────────────────────────────────────── */
.fs-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.fs-benefit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #374151;
  line-height: 1.5;
}

.fs-check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(89, 191, 56, 0.12);
  border: 1px solid rgba(89, 191, 56, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1F6935;
  margin-top: 1px;
}

/* ─── CTA ────────────────────────────────────────────────── */
.fs-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #22c55e, #59BF38);
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(89, 191, 56, 0.32);
  transition: transform 0.22s ease, box-shadow 0.22s ease, gap 0.18s ease;
}

.fs-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(89, 191, 56, 0.40);
  gap: 16px;
}

.fs-cta-arrow {
  transition: transform 0.22s ease;
}

.fs-cta:hover .fs-cta-arrow {
  transform: translateX(3px);
}

/* ─── IMAGEN ─────────────────────────────────────────────── */
.fs-image-wrap {
  position: relative;
}

.fs-image-glow {
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(32px);
  z-index: 0;
}

.fs-image {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 20px 52px rgba(0, 0, 0, 0.13),
    0 40px 80px rgba(0, 0, 0, 0.07);
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.fs-image:hover {
  transform: scale(1.02) translateY(-4px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.10),
    0 30px 64px rgba(0, 0, 0, 0.16),
    0 56px 96px rgba(0, 0, 0, 0.09);
}

/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 840px) {
  .fs-section {
    padding: 36px 20px;
  }

  .fs-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .fs-section--reverse .fs-inner {
    direction: ltr;
  }

  .fs-image {
    height: 280px;
  }
}
</style>
