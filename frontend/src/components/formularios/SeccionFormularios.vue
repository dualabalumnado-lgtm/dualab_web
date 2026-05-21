<template>
  <section class="participar-section">

    <!-- Fondo -->
    <div class="participar-bg" aria-hidden="true">
      <div class="bg-orb bg-orb--1"></div>
      <div class="bg-orb bg-orb--2"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="participar-inner">

      <!-- ── HEADER ── -->
      <header class="participar-header">
        <div class="header-badge">
          <span class="badge-dot"></span>
          Únete a Dualab
        </div>
        <h2 class="header-title">
          ¿Con quién queremos
          <span class="header-title-line">
            <em class="header-title-accent">trabajar juntos?</em>
          </span>
        </h2>
        <p class="header-sub">
          Conectamos empresas con talento real.<br>
          Cuéntanos quién eres y construyamos algo juntos.
        </p>
      </header>

      <!-- ── CARDS ── -->
      <div class="cards-grid">

        <!-- ── Empresas ── -->
        <button class="card card--empresas" @click="abrirModal('empresas')" type="button">
          <div class="card-band">
            <!-- icono decorativo grande de fondo -->
            <svg class="band-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            <div class="band-glow"></div>
            <div class="band-dots"></div>
            <div class="band-tag">Para empresas</div>
            <div class="band-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">Empresas</h3>
            <p class="card-desc">
              Convierte tus retos reales en proyectos resueltos por talento joven. Descubre tu próxima generación de profesionales antes de las prácticas.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-cta">Explorar colaboración</span>
            <span class="card-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </span>
          </div>
        </button>

        <!-- ── Centros ── -->
        <button class="card card--centros" @click="abrirModal('centros')" type="button">
          <div class="card-band">
            <svg class="band-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <div class="band-glow"></div>
            <div class="band-dots"></div>
            <div class="band-tag">Para centros</div>
            <div class="band-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">Centros Educativos</h3>
            <p class="card-desc">
              Integra proyectos reales en la formación y conecta a tu alumnado con empresas locales alineadas con cada perfil formativo.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-cta">Solicitar información</span>
            <span class="card-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </span>
          </div>
        </button>

        <!-- ── Alumnos ── -->
        <button class="card card--alumnos" @click="abrirModal('alumnos')" type="button">
          <div class="card-band">
            <svg class="band-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div class="band-glow"></div>
            <div class="band-dots"></div>
            <div class="band-tag">Para alumnos</div>
            <div class="band-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">Alumnos</h3>
            <p class="card-desc">
              Participa en retos reales, construye tu portfolio profesional y conecta con empresas directamente desde el aula antes de las prácticas.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-cta">Quiero participar</span>
            <span class="card-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </span>
          </div>
        </button>

      </div>
    </div>

    <!-- ── MODALS ── -->
    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <BaseModal v-if="modalActivo === 'empresas'" @close="cerrarModal">
        <FormularioEmpresas @cerrar="cerrarModal" />
      </BaseModal>
    </Transition>

    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <BaseModal v-if="modalActivo === 'centros'" @close="cerrarModal">
        <FormularioCentros @cerrar="cerrarModal" />
      </BaseModal>
    </Transition>

    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
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

<style scoped>

/* ─── SECTION ─────────────────────────────────────── */
.participar-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(160deg, #f0f7eb 0%, #ffffff 50%, #f6f9f3 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 100px 0 120px;
}

/* ─── FONDO ───────────────────────────────────────── */
.participar-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.bg-orb--1 {
  width: 600px; height: 600px;
  top: -150px; right: -100px;
  background: radial-gradient(circle, rgba(89,191,56,0.11) 0%, transparent 65%);
}

.bg-orb--2 {
  width: 500px; height: 500px;
  bottom: -100px; left: -80px;
  background: radial-gradient(circle, rgba(31,105,53,0.08) 0%, transparent 65%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(89,191,56,0.09) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
}

/* ─── INNER ───────────────────────────────────────── */
.participar-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ─── HEADER ──────────────────────────────────────── */
.participar-header {
  text-align: center;
  margin-bottom: 72px;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 18px;
  background: rgba(89,191,56,0.10);
  border: 1px solid rgba(89,191,56,0.24);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: #1F6935;
  margin-bottom: 28px;
}

.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #59BF38;
  box-shadow: 0 0 8px rgba(89,191,56,0.60);
  animation: dotPulse 2.4s ease-in-out infinite;
  flex-shrink: 0;
}

.header-title {
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.038em;
  color: #111827;
  margin-bottom: 20px;
  font-style: normal;
}

.header-title-line { display: block; }

.header-title-accent {
  font-style: normal;
  background: linear-gradient(100deg, #1F6935 0%, #59BF38 55%, #22c55e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-sub {
  font-size: 17px;
  color: #6b7280;
  line-height: 1.85;
  max-width: 440px;
  margin: 0 auto;
}

/* ─── CARDS GRID ──────────────────────────────────── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  align-items: stretch;
}

/* ─── CARD BASE ───────────────────────────────────── */
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  border: 1px solid rgba(0,0,0,0.07);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 16px rgba(0,0,0,0.06),
    0 16px 40px rgba(0,0,0,0.05);
  transition:
    transform 0.38s cubic-bezier(0.22,1,0.36,1),
    box-shadow 0.38s cubic-bezier(0.22,1,0.36,1),
    border-color 0.38s ease;
  animation: cardAppear 0.60s cubic-bezier(0.22,1,0.36,1) both;
}

.card:nth-child(1) { animation-delay: 0.08s; }
.card:nth-child(2) { animation-delay: 0.20s; }
.card:nth-child(3) { animation-delay: 0.32s; }

.card:hover {
  transform: translateY(-10px);
  border-color: rgba(89,191,56,0.18);
  box-shadow:
    0 2px 6px rgba(0,0,0,0.06),
    0 12px 32px rgba(0,0,0,0.09),
    0 32px 64px rgba(0,0,0,0.07);
}

/* ─── CARD BAND ───────────────────────────────────── */
.card-band {
  position: relative;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
}

/* Empresas — verde profundo */
.card--empresas .card-band {
  background: linear-gradient(135deg, #1F6935 0%, #2d8a47 55%, #1a5a2e 100%);
}

/* Centros — verde-teal */
.card--centros .card-band {
  background: linear-gradient(135deg, #145228 0%, #0f766e 55%, #166534 100%);
}

/* Alumnos — carbón oscuro */
.card--alumnos .card-band {
  background: linear-gradient(135deg, #1e293b 0%, #1F2937 55%, #111827 100%);
}

/* Hover: ligero brillo en el band */
.card--empresas:hover .card-band {
  background: linear-gradient(135deg, #236f3b 0%, #339950 55%, #1e6533 100%);
}
.card--centros:hover .card-band {
  background: linear-gradient(135deg, #175c2e 0%, #0e8079 55%, #1a7038 100%);
}
.card--alumnos:hover .card-band {
  background: linear-gradient(135deg, #243244 0%, #24303f 55%, #161e2a 100%);
}

/* Dot grid sobre el band */
.band-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px);
  background-size: 18px 18px;
  pointer-events: none;
}

/* Glow orb en esquina inferior-izquierda */
.band-glow {
  position: absolute;
  bottom: -48px; left: -40px;
  width: 200px; height: 200px;
  border-radius: 50%;
  pointer-events: none;
}

.card--empresas .band-glow {
  background: radial-gradient(circle, rgba(174,229,101,0.20) 0%, transparent 65%);
}
.card--centros .band-glow {
  background: radial-gradient(circle, rgba(94,234,212,0.18) 0%, transparent 65%);
}
.card--alumnos .band-glow {
  background: radial-gradient(circle, rgba(89,191,56,0.15) 0%, transparent 65%);
}

/* Icono decorativo grande — fondo semitransparente */
.band-bg-icon {
  position: absolute;
  width: 130px; height: 130px;
  right: -18px; bottom: -18px;
  color: rgba(255,255,255,0.10);
  pointer-events: none;
  transition: transform 0.38s cubic-bezier(0.22,1,0.36,1), color 0.38s ease;
}

.card:hover .band-bg-icon {
  transform: scale(1.08) rotate(4deg);
  color: rgba(255,255,255,0.15);
}

/* Tag de categoría */
.band-tag {
  position: absolute;
  top: 16px; left: 18px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}

/* Icono principal */
.band-icon {
  position: absolute;
  bottom: 20px; left: 20px;
  width: 52px; height: 52px;
  border-radius: 14px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow:
    0 4px 12px rgba(0,0,0,0.14),
    inset 0 1px 0 rgba(255,255,255,0.20);
  transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), background 0.28s ease;
}

.card:hover .band-icon {
  transform: scale(1.08);
  background: rgba(255,255,255,0.18);
}

/* Shimmer sutil en la transición band→body */
.card-band::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.08));
  pointer-events: none;
}

/* ─── CARD BODY ───────────────────────────────────── */
.card-body {
  flex: 1;
  padding: 24px 24px 20px;
}

.card-title {
  font-size: 19px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.028em;
  margin-bottom: 10px;
  line-height: 1.2;
  transition: color 0.22s ease;
}

.card:hover .card-title { color: #1F6935; }

.card-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.78;
}

/* ─── CARD FOOTER ─────────────────────────────────── */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px 20px;
  border-top: 1px solid #f3f4f6;
  transition: border-color 0.28s ease;
}

.card:hover .card-footer {
  border-top-color: rgba(89,191,56,0.15);
}

.card-cta {
  font-size: 13.5px;
  font-weight: 700;
  color: #374151;
  letter-spacing: -0.01em;
  transition: color 0.22s ease;
}

.card:hover .card-cta { color: #1F6935; }

.card-arrow {
  width: 30px; height: 30px;
  border-radius: 9px;
  background: #f3f4f6;
  border: 1px solid rgba(0,0,0,0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  flex-shrink: 0;
  transition:
    transform 0.28s cubic-bezier(0.22,1,0.36,1),
    background 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease;
}

.card:hover .card-arrow {
  transform: translateX(4px);
  background: rgba(89,191,56,0.10);
  border-color: rgba(89,191,56,0.22);
  color: #1F6935;
}

/* ─── ANIMATIONS ──────────────────────────────────── */
@keyframes cardAppear {
  from { opacity: 0; transform: translateY(28px) scale(0.978); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes dotPulse {
  0%, 100% { opacity: 1;  box-shadow: 0 0 8px rgba(89,191,56,0.60); }
  50%      { opacity: 0.5; box-shadow: 0 0 16px rgba(89,191,56,0.80); }
}

/* ─── RESPONSIVE ──────────────────────────────────── */
@media (max-width: 960px) {
  .cards-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .card:nth-child(3) { grid-column: 1 / -1; }
}

@media (max-width: 640px) {
  .participar-section { padding: 72px 0 90px; align-items: flex-start; }
  .participar-inner   { padding: 0 20px; }
  .participar-header  { margin-bottom: 48px; }
  .header-title       { font-size: clamp(30px, 8vw, 44px); }
  .header-sub         { font-size: 15.5px; }
  .cards-grid         { grid-template-columns: 1fr; gap: 14px; }
  .card:nth-child(3)  { grid-column: auto; }
  .card:nth-child(1),
  .card:nth-child(2),
  .card:nth-child(3)  { animation-delay: 0.10s; }
}
</style>
