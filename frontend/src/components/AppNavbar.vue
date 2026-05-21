<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logo from '@/assets/Dualab_logo_sin_fondo_2.png'

const router = useRouter()
const route  = useRoute()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function scrollToSection(id) {
  closeMenu()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push('/')
  }
}

function navigate(path) {
  closeMenu()
  router.push(path)
}

function irAFormularios() {
  navigate('/participar')
}
</script>

<template>
  <header class="nav-wrapper">
    <nav class="nav">

      <!-- LOGO — clic en logo/wordmark = inicio, clic en chevron = menú -->
      <div class="nav-logo" :class="{ 'is-open': menuOpen }">
        <div class="logo-home" @click="navigate('/')">
          <div class="logo-icon-wrap">
            <img :src="logo" alt="" class="logo-img" />
          </div>
          <span class="logo-wordmark">Dua<em>Lab</em></span>
        </div>
        <button class="logo-chevron-btn" @click="toggleMenu" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- LINKS CENTRO -->
      <div class="nav-links">
        <button class="nav-link" @click="scrollToSection('bloque-estudiantes')">Estudiantes</button>
        <button class="nav-link" @click="scrollToSection('bloque-centros')">Centros</button>
        <button class="nav-link" @click="scrollToSection('bloque-empresas')">Empresas</button>
        <button
          class="nav-link"
          :class="{ 'is-active': route.path === '/familias' }"
          @click="navigate('/familias')"
        >
          Explorar retos
        </button>
      </div>

      <!-- CTA -->
      <div class="nav-actions">
        <button v-if="route.path === '/familias'" class="nav-btn nav-btn--participar" @click="navigate('/participar')">
          Quiero participar
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" class="btn-arrow">
            <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button v-else class="nav-btn" @click="navigate('/familias')">
          Explorar retos
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" class="btn-arrow">
            <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

    </nav>

    <!-- MENÚ DESPLEGABLE VERTICAL -->
    <Transition name="menu">
      <div v-if="menuOpen" class="dropdown" @click.self="closeMenu">

        <div class="dropdown-section">
          <p class="dropdown-label">Navegar</p>
          <button class="dropdown-item" @click="navigate('/familias')">
            <span class="dropdown-icon">🎯</span>
            <span>
              <strong>Explorar retos</strong>
              <em>Familias profesionales disponibles</em>
            </span>
          </button>
          <button class="dropdown-item" @click="navigate('/microretos')">
            <span class="dropdown-icon">⚡</span>
            <span>
              <strong>Todos los microretos</strong>
              <em>Catálogo completo</em>
            </span>
          </button>
        </div>

        <div class="dropdown-divider"></div>

        <div class="dropdown-section">
          <p class="dropdown-label">Para quién</p>
          <button class="dropdown-item" @click="scrollToSection('bloque-estudiantes')">
            <span class="dropdown-icon">🎓</span>
            <span>
              <strong>Estudiantes</strong>
              <em>Construye tu portafolio real</em>
            </span>
          </button>
          <button class="dropdown-item" @click="scrollToSection('bloque-centros')">
            <span class="dropdown-icon">🏫</span>
            <span>
              <strong>Centros educativos</strong>
              <em>Conecta el aula con la empresa</em>
            </span>
          </button>
          <button class="dropdown-item" @click="scrollToSection('bloque-empresas')">
            <span class="dropdown-icon">🏢</span>
            <span>
              <strong>Empresas</strong>
              <em>Descubre talento preparado</em>
            </span>
          </button>
        </div>

        <div class="dropdown-divider"></div>

        <button class="dropdown-cta" @click="irAFormularios">
          Quiero participar →
        </button>

      </div>
    </Transition>

    <!-- OVERLAY para cerrar clickando fuera -->
    <Transition name="overlay">
      <div v-if="menuOpen" class="overlay" @click="closeMenu" />
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 200;
  padding: 10px 24px 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(24px) saturate(1.6);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  padding: 5px 6px 5px 12px;
  box-shadow:
    0 1px 0 rgba(89, 191, 56, 0.07),
    0 2px 12px rgba(0, 0, 0, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 2;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

/* ── LOGO ─────────────────────────────────────────────── */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  user-select: none;
}

.logo-home {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 3px 6px 3px 4px;
  border-radius: 10px;
  transition: background 0.18s ease;
}

.logo-home:hover {
  background: rgba(89, 191, 56, 0.06);
}

.logo-chevron-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #9ca3af;
  transition: background 0.15s ease, color 0.15s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  padding: 0;
}

.logo-chevron-btn:hover {
  background: rgba(89, 191, 56, 0.08);
  color: #59BF38;
}

.nav-logo.is-open .logo-chevron-btn {
  transform: rotate(180deg);
  color: #59BF38;
  background: rgba(89, 191, 56, 0.08);
}

.logo-icon-wrap {
  width: 38px;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
}

.logo-img {
  width: 100%;
  height: 62px;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: drop-shadow(0 1px 6px rgba(89, 191, 56, 0.20));
  transition: filter 0.22s ease, transform 0.22s ease;
}

.logo-home:hover .logo-img {
  filter: drop-shadow(0 2px 10px rgba(89, 191, 56, 0.32));
  transform: translateY(-1px);
}

.logo-wordmark {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  line-height: 1;
  font-style: normal;
}

.logo-wordmark em {
  font-style: normal;
  background: linear-gradient(135deg, #22c55e, #59BF38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}


/* ── LINKS ────────────────────────────────────────────── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-link {
  position: relative;
  background: none;
  border: none;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.is-active {
  color: #1F6935;
  background: rgba(89, 191, 56, 0.06);
}

.nav-link.is-active {
  font-weight: 600;
}

/* ── CTA ──────────────────────────────────────────────── */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}


.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: linear-gradient(135deg, #22c55e 0%, #4abe33 100%);
  color: #fff;
  border: none;
  border-radius: 11px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: -0.01em;
  box-shadow: 0 2px 10px rgba(89, 191, 56, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease, gap 0.18s ease;
}

.nav-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 18px rgba(89, 191, 56, 0.38);
  gap: 10px;
}

.btn-arrow {
  transition: transform 0.18s ease;
}

.nav-btn:hover .btn-arrow {
  transform: translateX(2px);
}

.nav-btn--participar {
  background: linear-gradient(135deg, #1F6935 0%, #2d8a47 100%);
  box-shadow: 0 2px 10px rgba(31, 105, 53, 0.30);
}

.nav-btn--participar:hover {
  box-shadow: 0 4px 18px rgba(31, 105, 53, 0.40);
}

/* ── DROPDOWN ─────────────────────────────────────────── */
.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 24px;
  width: 280px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(28px) saturate(1.6);
  -webkit-backdrop-filter: blur(28px) saturate(1.6);
  border: 1px solid rgba(255, 255, 255, 0.90);
  border-radius: 18px;
  padding: 10px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.08),
    0 16px 48px rgba(0, 0, 0, 0.10),
    0 0 0 1px rgba(89, 191, 56, 0.06);
  z-index: 1;
}

.dropdown-section {
  padding: 4px 0;
}

.dropdown-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  padding: 4px 10px 6px;
  margin: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  background: none;
  border: none;
  padding: 9px 10px;
  border-radius: 11px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.dropdown-item:hover {
  background: rgba(89, 191, 56, 0.07);
}

.dropdown-icon {
  font-size: 18px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(89, 191, 56, 0.08);
  border-radius: 8px;
  flex-shrink: 0;
}

.dropdown-item span:last-child {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.dropdown-item strong {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
  display: block;
}

.dropdown-item em {
  font-style: normal;
  font-size: 11.5px;
  color: #9ca3af;
  display: block;
}

.dropdown-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  margin: 6px 10px;
}

.dropdown-cta {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #22c55e, #59BF38);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.01em;
  margin-top: 4px;
  box-shadow: 0 2px 10px rgba(89, 191, 56, 0.28);
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}

.dropdown-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(89, 191, 56, 0.38);
}

/* ── OVERLAY ──────────────────────────────────────────── */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
}

/* ── ANIMACIONES ──────────────────────────────────────── */
.menu-enter-active {
  transition: opacity 0.20s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}
.menu-leave-active {
  transition: opacity 0.16s ease, transform 0.18s ease;
}
.menu-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.97);
}
.menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

.overlay-enter-active { transition: opacity 0.18s ease; }
.overlay-leave-active { transition: opacity 0.14s ease; }
.overlay-enter-from,
.overlay-leave-to     { opacity: 0; }

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 768px) {
  .nav-wrapper {
    padding: 8px 12px 0;
  }

  .nav-links {
    display: none;
  }

  .nav-btn {
    padding: 7px 14px;
    font-size: 12.5px;
  }

  .dropdown {
    left: 12px;
    right: 12px;
    width: auto;
  }
}


</style>

