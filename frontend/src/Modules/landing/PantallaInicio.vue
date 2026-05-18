<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/Dualab_logo_sin_fondo_2.png'

const emit = defineEmits(['login', 'formulario'])

const resultsRef = ref(null)
const resultsVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) resultsVisible.value = true },
    { threshold: 0 }
  )
  if (resultsRef.value) {
    observer.observe(resultsRef.value)
  } else {
    resultsVisible.value = true
  }
  setTimeout(() => { resultsVisible.value = true }, 600)
})
</script>

<template>
  <div class="container">
    <div class="content">

      <!-- NAV -->
      <nav class="nav">
        <div class="nav-logo">
          <img :src="logo" alt="Dualab logo" class="logo-img" />
        </div>
        <div class="nav-actions">
          <span class="nav-hint">¿Ya tienes cuenta?</span>
          <button class="nav-btn" @click="emit('login')">Iniciar sesión</button>
        </div>
      </nav>

      <!-- HERO 2 COLS -->
      <div class="hero">

        <!-- LEFT -->
        <div class="hero-left">
          <span class="hero-badge">Formación + Empresa</span>
          <h1 class="hero-title">
            Conectamos empresas<br>
            con <em class="hero-accent">talento preparado.</em>
          </h1>
          <p class="hero-sub">
            Alumnado dual resuelve retos reales de empresa en clase.<br>
            La primera conexión antes de las prácticas.
          </p>
          <div class="hero-actions">
            <button class="hero-cta-ghost" @click="emit('formulario', 'estudiante')">Explorar retos</button>
          </div>
        </div>

        <!-- RIGHT: impacto -->
        <div class="hero-right">
          <div class="hero-impact">

            <div class="impact-item">
              <span class="impact-who">Empresas</span>
              <p class="impact-desc">Conectan con talento preparado para resolver retos reales de su sector.</p>
            </div>

            <div class="impact-divider"></div>

            <div class="impact-item">
              <span class="impact-who">Centros educativos</span>
              <p class="impact-desc">Agilizan la vinculación con empresas alineadas con cada perfil formativo.</p>
            </div>

            <div class="impact-divider"></div>

            <div class="impact-item">
              <span class="impact-who">Alumnado</span>
              <p class="impact-desc">Llega a sus prácticas habiendo trabajado proyectos reales dentro del aula.</p>
            </div>

          </div>
        </div>

      </div>

      <!-- ECOSISTEMA -->
      <div class="eco-section">
        <p class="eco-label">Cómo funciona</p>
        <div class="flow">

          <div class="flow-photo flow-photo--lead">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=640&fit=crop&q=85&auto=format"
              alt="Empresa"
              loading="lazy"
            />
            <div class="flow-photo-overlay"></div>
            <div class="flow-photo-info">
              <span class="flow-actor">Empresa</span>
              <span class="flow-action">Plantea retos reales</span>
            </div>
          </div>

          <div class="flow-photo">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=560&fit=crop&q=85&auto=format"
              alt="Centro educativo"
              loading="lazy"
            />
            <div class="flow-photo-overlay"></div>
            <div class="flow-photo-info">
              <span class="flow-actor">Centro educativo</span>
              <span class="flow-action">Integra en el aula</span>
            </div>
          </div>

          <div class="flow-photo">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=560&fit=crop&q=85&auto=format"
              alt="Alumnado"
              loading="lazy"
            />
            <div class="flow-photo-overlay"></div>
            <div class="flow-photo-info">
              <span class="flow-actor">Alumnado</span>
              <span class="flow-action">Desarrolla soluciones reales</span>
            </div>
          </div>

        </div>
      </div>

      <!-- FEEDBACK EMPRESA -->
      <div class="feedback-section">
        <div class="feedback-flow">
          <div class="feedback-step">
            <span class="feedback-step-icon">🎓</span>
            <span class="feedback-step-label">Alumno resuelve el reto</span>
          </div>
          <div class="feedback-arrow">→</div>
          <div class="feedback-step">
            <span class="feedback-step-icon">📬</span>
            <span class="feedback-step-label">Empresa recibe la solución</span>
          </div>
          <div class="feedback-arrow">→</div>
          <div class="feedback-step feedback-step--highlight">
            <span class="feedback-step-icon">💬</span>
            <span class="feedback-step-label">Feedback real + conexión</span>
          </div>
        </div>

        <div class="feedback-quote">
          <div class="feedback-quote-bar"></div>
          <div class="feedback-quote-body">
            <p class="feedback-quote-text">
              "Recibimos propuestas de alumnos que entendieron exactamente lo que necesitábamos.
              Dos de ellos están ahora haciendo prácticas con nosotros."
            </p>
            <div class="feedback-quote-author">
              <span class="feedback-author-name">Marta Soler</span>
              <span class="feedback-author-role">CEO · Empresa de software, Sevilla</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RESULTADOS -->
      <section ref="resultsRef" class="results" :class="{ 'results--visible': resultsVisible }">

        <div class="results-head">
          <span class="results-eyebrow">Impacto real</span>
          <h2 class="results-title">
            Una <em class="results-accent">conexión</em> más inteligente<br>
            entre formación y <em class="results-accent">empresa</em>
          </h2>
        </div>

        <div class="results-finale">
          <div class="results-finale-glow"></div>
          <div class="results-finale-inner">
            <span class="results-finale-spark">✦</span>
            <div>
              <p class="results-finale-label">El resultado</p>
              <p class="results-finale-text">
                <strong>Dualab</strong> une formación y empresa en un flujo mucho más
                <strong>eficiente</strong>, práctico y conectado con la realidad.
              </p>
            </div>
          </div>
        </div>

      </section>

      <!-- TARJETAS -->
      <div class="cards">

        <div class="card card-student">
          <span class="card-icon">🎓</span>
          <p class="card-role">Estudiante</p>
          <h3>Practica con casos reales</h3>
          <p class="card-desc">Resuelve retos de empresa y construye tu portafolio antes de las prácticas.</p>
          <button class="card-cta" @click="emit('formulario', 'estudiante')">Explorar retos →</button>
        </div>

        <div class="card card-center">
          <span class="card-icon">🏫</span>
          <p class="card-role">Centro educativo</p>
          <h3>Gestiona tu alumnado</h3>
          <p class="card-desc">Asigna retos y haz seguimiento del progreso de cada grupo.</p>
          <button class="card-cta" @click="emit('formulario', 'centro')">Solicitar demo →</button>
        </div>

        <div class="card card-company">
          <span class="card-icon">🏢</span>
          <p class="card-role">Empresa</p>
          <h3>Publica tus retos</h3>
          <p class="card-desc">Encuentra talento joven resolviendo tus desafíos reales.</p>
          <button class="card-cta" @click="emit('formulario', 'empresa')">Empezar ahora →</button>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

.logo-img {
  height: 70px;
  width: auto;
  opacity: 0.92;
}

/* ─── LAYOUT ───────────────────────────────────────────── */
.container {
  min-height: 100vh;
  padding: 20px 48px 80px;
  font-family: sans-serif;
  background: linear-gradient(135deg, #f0f5ea 0%, #ffffff 40%, #f5f8fb 100%);
}

.content {
  max-width: 1200px;
  margin: auto;
}

/* ─── NAV ───────────────────────────────────────────────── */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-hint {
  font-size: 13px;
  color: #75947F;
}

.nav-btn {
  background: rgba(255,255,255,0.55);
  color: #1F6935;
  border: 1px solid rgba(31,105,53,0.15);
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(31,105,53,0.08);
}

/* ─── HERO 2 COLS ───────────────────────────────────────── */
.hero {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 56px;
  align-items: center;
  padding: 32px 0 88px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-badge {
  display: inline-block;
  background: rgba(89,191,56,0.10);
  border: 1px solid rgba(89,191,56,0.22);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1F6935;
  margin-bottom: 28px;
}

.hero-title {
  font-size: clamp(40px, 4.8vw, 62px);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: #111827;
  margin-bottom: 22px;
  font-style: normal;
}

.hero-accent {
  font-style: normal;
  background: linear-gradient(to right, #22c55e, #a3e635);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 17px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 38px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}

.hero-cta-primary {
  background: linear-gradient(135deg, #22c55e, #59BF38);
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 26px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 16px rgba(89,191,56,0.30);
}

.hero-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(89,191,56,0.40);
}

.hero-cta-ghost {
  background: rgba(255,255,255,0.6);
  color: #1F6935;
  font-weight: 600;
  font-size: 15px;
  padding: 14px 26px;
  border-radius: 12px;
  border: 1px solid rgba(31,105,53,0.15);
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.hero-cta-ghost:hover {
  background: white;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
}

/* ─── HERO RIGHT IMPACT ─────────────────────────────────── */
.hero-right {
  align-self: center;
}

.hero-impact {
  position: relative;
  background: rgba(9, 21, 18, 0.91);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(89, 191, 56, 0.16);
  border-radius: 22px;
  padding: 8px 0;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(89, 191, 56, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.22),
    0 22px 56px rgba(0, 0, 0, 0.30),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

/* glow top-right */
.hero-impact::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -70px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(89, 191, 56, 0.16) 0%, transparent 65%);
  pointer-events: none;
}

/* glow bottom-left */
.hero-impact::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(31, 105, 53, 0.12) 0%, transparent 65%);
  pointer-events: none;
}

.hero-impact:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 0 1px rgba(89, 191, 56, 0.12),
    0 10px 28px rgba(0, 0, 0, 0.28),
    0 36px 72px rgba(0, 0, 0, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.impact-item {
  position: relative;
  z-index: 1;
  padding: 26px 32px;
  transition: background 0.22s ease;
}

.impact-item:hover {
  background: rgba(89, 191, 56, 0.05);
}

.impact-who {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: #6ee840;
  margin-bottom: 8px;
}

.impact-who::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #59BF38;
  flex-shrink: 0;
  box-shadow: 0 0 7px rgba(89, 191, 56, 0.70);
}

.impact-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.60);
  line-height: 1.70;
  margin: 0;
}

.impact-divider {
  position: relative;
  z-index: 1;
  height: 1px;
  background: rgba(89, 191, 56, 0.09);
  margin: 0 32px;
}

/* ─── ECOSISTEMA ────────────────────────────────────────── */
.eco-section {
  margin-bottom: 40px;
}

.eco-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 20px;
}

.flow {
  display: grid;
  grid-template-columns: 1.45fr 1fr 1fr;
  gap: 18px;
  align-items: stretch;
}

.flow-photo {
  position: relative;
  height: 260px;
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.10),
    0 12px 36px rgba(0, 0, 0, 0.16),
    0 28px 64px rgba(0, 0, 0, 0.10);
  transition:
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}

.flow-photo--lead {
  border-radius: 24px;
}

.flow-photo:hover {
  transform: translateY(-6px) scale(1.005);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 20px 52px rgba(0, 0, 0, 0.22),
    0 40px 80px rgba(0, 0, 0, 0.14);
}

.flow-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.80;
  filter: contrast(1.06) saturate(1.05);
  transition:
    transform 0.70s ease-out,
    opacity 0.40s ease,
    filter 0.40s ease;
}

.flow-photo:hover img {
  transform: scale(1.05);
  opacity: 0.92;
  filter: contrast(1.10) saturate(1.08);
}

.flow-photo-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(9, 21, 18, 0.28) 0%, transparent 42%),
    linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.22) 46%, transparent 100%);
}

.flow-photo-info {
  position: absolute;
  bottom: 18px;
  left: 18px;
  padding: 10px 16px 11px;
  background: rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 14px;
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
}

.flow-actor {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(174, 229, 101, 0.80);
}

.flow-action {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

/* ─── RESULTADOS ────────────────────────────────────────── */
.results {
  padding: 24px 0 40px;
  position: relative;
}

.results::before {
  content: '';
  position: absolute;
  top: -60px; left: 50%;
  transform: translateX(-50%);
  width: 860px;
  height: 300px;
  background: radial-gradient(ellipse at center, rgba(89,191,56,0.055) 0%, transparent 68%);
  pointer-events: none;
}

.results-head {
  text-align: center;
  margin-bottom: 24px;
}

.results-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 8px;
}

.results-title {
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111827;
  font-style: normal;
}

.results-accent {
  font-style: normal;
  background: linear-gradient(135deg, #22c55e 0%, #59BF38 50%, #AEE565 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.results-box {
  background: #fff;
  border: 1px solid rgba(89,191,56,0.20);
  border-left: 3px solid #59BF38;
  border-radius: 18px;
  padding: 8px 0;
  margin-bottom: 24px;
  box-shadow:
    0 2px 8px rgba(0,0,0,0.05),
    0 8px 28px rgba(31,105,53,0.07);
  opacity: 0;
  transform: translateY(24px);
}

.results--visible .results-box {
  animation: fadeUp 0.55s ease 0.05s forwards;
}

.results-box-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 28px;
}

.results-box-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #59BF38;
  margin-top: 6px;
}

.results-box-who {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 4px;
}

.results-box-item p {
  font-size: 14px;
  color: #374151;
  line-height: 1.6;
  margin: 0;
}

.results-box-divider {
  height: 1px;
  background: rgba(89,191,56,0.10);
  margin: 0 28px;
}

.results-finale {
  position: relative;
  background: linear-gradient(150deg, rgba(18, 52, 32, 0.78) 0%, rgba(9, 21, 18, 0.86) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(89, 191, 56, 0.13);
  border-radius: 20px;
  padding: 22px 36px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(89, 191, 56, 0.06),
    0 10px 32px rgba(9, 21, 18, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  opacity: 0;
  transform: translateY(28px);
}

.results--visible .results-finale {
  animation: fadeUp 0.55s ease 0.46s forwards;
}

.results-finale-glow {
  position: absolute;
  top: -60px; right: -60px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(89, 191, 56, 0.12) 0%, transparent 65%);
  pointer-events: none;
}

.results-finale-inner {
  display: flex;
  align-items: center;
  gap: 22px;
  position: relative;
  z-index: 1;
}

.results-finale-spark {
  font-size: 26px;
  color: #AEE565;
  filter: drop-shadow(0 0 10px rgba(174, 229, 101, 0.55));
  flex-shrink: 0;
  line-height: 1;
}

.results-finale-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(174, 229, 101, 0.60);
  margin-bottom: 6px;
}

.results-finale-text {
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
  letter-spacing: -0.01em;
  max-width: 640px;
}

.results-finale-text strong {
  color: #AEE565;
  font-weight: 700;
}

/* ─── TARJETAS ──────────────────────────────────────────── */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 52px;
}

.card {
  background: #ffffff;
  border: 1px solid #C6D8C6;
  border-top: 3px solid;
  border-radius: 18px;
  padding: 36px 32px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(31,105,53,0.13);
}

.card-student { border-top-color: #59BF38; --accent: #59BF38; }
.card-center  { border-top-color: #1F6935; --accent: #1F6935; }
.card-company { border-top-color: #75947F; --accent: #75947F; }

.card-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 18px;
}

.card-role {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1F6935;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 14px;
  color: #75947F;
  line-height: 1.6;
  margin-bottom: 24px;
}

.card-cta {
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.15s ease;
}

.card-cta:hover {
  gap: 10px;
}

/* ─── FEEDBACK EMPRESA ──────────────────────────────────── */
.feedback-section {
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feedback-flow {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(89, 191, 56, 0.05);
  border: 1px solid rgba(89, 191, 56, 0.14);
  border-radius: 16px;
  padding: 16px 24px;
}

.feedback-step {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.feedback-step-icon {
  font-size: 18px;
  line-height: 1;
}

.feedback-step-label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.feedback-step--highlight .feedback-step-label {
  color: #1F6935;
}

.feedback-arrow {
  font-size: 16px;
  color: #59BF38;
  font-weight: 700;
  flex-shrink: 0;
}

.feedback-quote {
  display: flex;
  gap: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.feedback-quote-bar {
  width: 4px;
  background: linear-gradient(to bottom, #59BF38, #22c55e);
  flex-shrink: 0;
}

.feedback-quote-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feedback-quote-text {
  font-size: 14px;
  color: #374151;
  line-height: 1.7;
  margin: 0;
  font-style: italic;
}

.feedback-quote-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feedback-author-name {
  font-size: 13px;
  font-weight: 700;
  color: #1F6935;
}

.feedback-author-role {
  font-size: 12px;
  color: #9ca3af;
}

/* ─── ANIMACIONES ───────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

</style>
