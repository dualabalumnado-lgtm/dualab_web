<script setup>
import { useRouter } from 'vue-router'
import logo from '@/assets/Dualab_logo_sin_fondo_2.png'

const router = useRouter()

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push('/')
  }
}
</script>

<template>
  <nav class="nav">
    <div class="nav-logo" @click="router.push('/')" style="cursor: pointer;">
      <img :src="logo" alt="Dualab logo" class="logo-img" />
    </div>
    <div class="nav-links">
      <button class="nav-link" @click="scrollToSection('bloque-estudiantes')">Estudiantes</button>
      <button class="nav-link" @click="scrollToSection('bloque-centros')">Centros educativos</button>
      <button class="nav-link" @click="scrollToSection('bloque-empresas')">Empresas</button>
      <button class="nav-link" @click="router.push('/familias')">Explorar retos</button>
    </div>
    <div class="nav-actions">
      <button class="nav-btn" @click="router.push('/familias')">Quiero participar</button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 12px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(22px) saturate(1.5);
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.86);
  border-bottom: 1px solid rgba(89, 191, 56, 0.10);
  border-radius: 18px;
  padding: 10px 18px;
  margin: 12px 24px 0;
  box-shadow:
    0 1px 0 rgba(89, 191, 56, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 12px 36px rgba(0, 0, 0, 0.04);
}

.logo-img {
  height: 52px;
  width: auto;
  opacity: 0.95;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-link {
  position: relative;
  background: none;
  border: none;
  padding: 8px 13px;
  font-size: 13.5px;
  font-weight: 500;
  color: #4b5563;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.18s ease, background 0.18s ease;
  letter-spacing: -0.01em;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 13px;
  right: 13px;
  height: 1.5px;
  background: #59BF38;
  border-radius: 999px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover {
  color: #1F6935;
  background: rgba(89, 191, 56, 0.06);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
}

.nav-btn {
  background: linear-gradient(135deg, #22c55e, #59BF38);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 9px 20px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: -0.01em;
  box-shadow: 0 3px 12px rgba(89, 191, 56, 0.30);
  transition: transform 0.20s ease, box-shadow 0.20s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(89, 191, 56, 0.40);
}
</style>
