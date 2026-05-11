<script setup>
import logo from '@/assets/Dualab_logo_sin_fondo_2.png'
const emit = defineEmits(['login', 'formulario'])
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

      <!-- HERO -->
      <h1 class="title">
        El puente entre empresa, formación y talento real.
      </h1>

      <p class="subtitle">
        Las empresas plantean necesidades reales. El alumnado desarrolla soluciones reales antes de incorporarse al entorno profesional.
      </p>

      <!-- ECOSISTEMA -->
      <div class="eco-section">

        <div class="eco-wrap">
          <div class="eco-flow">

            <div class="eco-card">
              <p class="eco-num">01</p>
              <div class="eco-icon eco-icon--empresa">🏢</div>
              <p class="eco-actor">Empresa</p>
              <h3 class="eco-title">Plantea<br>necesidad</h3>
              <p class="eco-desc">Un reto real del negocio.</p>
            </div>

            <div class="eco-conn"><span></span></div>

            <div class="eco-card eco-card--hub">
              <p class="eco-hub-badge">núcleo</p>
              <div class="eco-icon eco-icon--dualab">⚡</div>
              <p class="eco-actor eco-actor--hub">Dualab</p>
              <h3 class="eco-title eco-title--hub">Diseña el<br>microreto</h3>
              <p class="eco-desc eco-desc--hub">Traduce la necesidad en reto pedagógico.</p>
            </div>

            <div class="eco-conn"><span></span></div>

            <div class="eco-card">
              <p class="eco-num">03</p>
              <div class="eco-icon eco-icon--centro">🏫</div>
              <p class="eco-actor">Centro educativo</p>
              <h3 class="eco-title">Integra<br>en el aula</h3>
              <p class="eco-desc">Actividad formativa real.</p>
            </div>

            <div class="eco-conn"><span></span></div>

            <div class="eco-card">
              <p class="eco-num">04</p>
              <div class="eco-icon eco-icon--alumnado">🎓</div>
              <p class="eco-actor">Alumnado</p>
              <h3 class="eco-title">Desarrolla<br>la solución</h3>
              <p class="eco-desc">Experiencia profesional real.</p>
            </div>

          </div>
        </div>

        <div class="eco-success">
          <span class="eco-success-spark">✦</span>
          <div>
            <p class="eco-success-label">Resultado del ciclo</p>
            <p class="eco-success-title">Empresa detecta talento</p>
          </div>
        </div>

      </div>

      <!-- TARJETAS -->
      <div class="cards">

        <div class="card card-student">
          <span class="card-icon">🎓</span>
          <p class="card-role">Estudiante</p>
          <h3>Practica con casos reales</h3>
          <p class="card-desc">Resuelve retos de empresa y construye tu portafolio.</p>
          <button class="card-cta" @click="emit('formulario', 'estudiante')">Explorar retos →</button>
        </div>

        <div class="card card-center">
          <span class="card-icon">🏫</span>
          <p class="card-role">Centro educativo</p>
          <h3>Gestiona tu alumnado</h3>
          <p class="card-desc">Asigna retos y haz seguimiento del progreso.</p>
          <button class="card-cta" @click="emit('formulario', 'centro')">Solicitar demo →</button>
        </div>

        <div class="card card-company">
          <span class="card-icon">🏢</span>
          <p class="card-role">Empresa</p>
          <h3>Publica tus retos</h3>
          <p class="card-desc">Encuentra talento joven resolviendo tus desafíos.</p>
          <button class="card-cta" @click="emit('formulario', 'empresa')">Empezar ahora →</button>
        </div>

      </div>

      <!-- CÓMO FUNCIONA DETALLADO -->
      <!-- /*<div class="how">

        <h2 class="how-title">¿Cómo funciona?</h2>
        <p class="how-sub">Un proceso simple para conectar talento con oportunidades</p>

        <div class="steps">

          <div class="step">
            <div class="step-num">1</div>
            <h4>Elige tu reto</h4>
            <p>Explora retos organizados por nivel y área profesional.</p>
          </div>

          <div class="step">
            <div class="step-num">2</div>
            <h4>Desarrolla</h4>
            <p>Aplica tus conocimientos y completa el reto.</p>
          </div>

          <div class="step">
            <div class="step-num">3</div>
            <h4>Destaca</h4>
            <p>Añádelo a tu portfolio y demuestra tu talento.</p>
          </div>

        </div>
      </div>*/ -->

    </div>
  </div>
</template>

<style scoped>

.logo-img {
  height: 70px;
  width: auto;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.08));
  opacity: 0.92;
}

/* ─── LAYOUT BASE ────────────────────────────────────── */
.container {
  min-height: 100vh;
  padding: 20px 40px 60px;
  font-family: sans-serif;
  background: radial-gradient(circle at top, #f7fcf6 0%, #eef6ed 50%, #e6efe5 100%);
}

.content {
  max-width: 960px;
  margin: auto;
  text-align: center;
}

/* ─── NAV ────────────────────────────────────────────── */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  text-align: left;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #1F6935;
}

.logo-mark {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(160deg, #1F6935, #59BF38);
}

.nav-btn {
  background: rgba(255, 255, 255, 0.55);
  color: #1F6935;

  border: 1px solid rgba(31, 105, 53, 0.15);
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

  box-shadow: 0 10px 24px rgba(31, 105, 53, 0.08);
}

.nav-btn:active {
  transform: scale(0.97);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-hint {
  font-size: 13px;
  color: #75947F;
}

/* ─── HERO ───────────────────────────────────────────── */
.title {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  max-width: 950px;
  margin: 0 auto 24px;
  line-height: 1.1;
  color: #204b2d;
}

.subtitle {
  font-size: 20px;
  color: #6f8776;
  max-width: 720px;
  margin: 0 auto 20px;
  line-height: 1.6;
}

/* ─── ECOSISTEMA ─────────────────────────────────────── */
.eco-section {
  margin: 0 auto 52px;
}

.eco-wrap {
  background: linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(242,250,242,0.45) 100%);
  border: 1px solid rgba(255,255,255,0.82);
  border-radius: 28px;
  padding: 36px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.04),
    0 24px 64px rgba(0,0,0,0.06),
    inset 0 1px 0 rgba(255,255,255,1);
  margin-bottom: 14px;
}

.eco-flow {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Card base ─────────────────────────────────── */
.eco-card {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 20px;
  padding: 24px 18px;
  flex: 1;
  max-width: 185px;
  text-align: left;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 12px rgba(0,0,0,0.03),
    inset 0 1px 0 rgba(255,255,255,0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: transform 0.28s ease-out, box-shadow 0.28s ease-out;
}

.eco-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 20px 40px rgba(0,0,0,0.09),
    0 8px 20px rgba(0,0,0,0.05),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

/* ── Hub card — Dualab ─────────────────────────── */
.eco-card--hub {
  background: linear-gradient(160deg, #1c5e30 0%, #23523a 100%);
  border-color: rgba(89,191,56,0.22);
  box-shadow:
    0 0 0 1px rgba(89,191,56,0.10),
    0 8px 32px rgba(31,105,53,0.28),
    0 0 60px rgba(89,191,56,0.07),
    inset 0 1px 0 rgba(255,255,255,0.07);
  transform: scale(1.05);
  position: relative;
  z-index: 1;
}

.eco-card--hub:hover {
  transform: scale(1.05) translateY(-6px);
  box-shadow:
    0 0 0 1px rgba(89,191,56,0.18),
    0 24px 48px rgba(31,105,53,0.38),
    0 0 80px rgba(89,191,56,0.10),
    inset 0 1px 0 rgba(255,255,255,0.10);
}

/* ── Connector ─────────────────────────────────── */
.eco-conn {
  flex-shrink: 0;
  width: 32px;
  display: flex;
  align-items: center;
}

.eco-conn span {
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, rgba(89,191,56,0.1), rgba(89,191,56,0.45), rgba(89,191,56,0.1));
}

.eco-conn span::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(89,191,56,0.5);
  box-shadow: 0 0 6px rgba(89,191,56,0.4);
}

.eco-conn span::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 7px;
  height: 7px;
  border-right: 1.5px solid rgba(89,191,56,0.5);
  border-top: 1.5px solid rgba(89,191,56,0.5);
  transform: rotate(45deg);
}

/* ── Step number ───────────────────────────────── */
.eco-num {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 12px;
}

/* ── Hub badge ─────────────────────────────────── */
.eco-hub-badge {
  display: inline-block;
  background: rgba(89,191,56,0.18);
  border: 1px solid rgba(89,191,56,0.28);
  border-radius: 999px;
  padding: 2px 9px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: rgba(174,229,101,0.85);
  margin-bottom: 12px;
}

/* ── Icon wrap ─────────────────────────────────── */
.eco-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin-bottom: 12px;
}

.eco-icon--empresa  { background: rgba(31,105,53,0.08);    border-color: rgba(31,105,53,0.20); }
.eco-icon--dualab   { background: rgba(89,191,56,0.18);    border-color: rgba(89,191,56,0.30); }
.eco-icon--centro   { background: rgba(117,148,127,0.10);  border-color: rgba(117,148,127,0.25); }
.eco-icon--alumnado { background: rgba(174,229,101,0.15);  border-color: rgba(174,229,101,0.35); }

/* ── Actor / Title / Desc ──────────────────────── */
.eco-actor {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 5px;
}
.eco-actor--hub { color: rgba(255,255,255,0.48); }

.eco-title {
  font-size: 14px;
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}
.eco-title--hub { color: #fff; }

.eco-desc {
  font-size: 11px;
  color: #9ca3af;
  line-height: 1.6;
}
.eco-desc--hub { color: rgba(255,255,255,0.48); }

/* ── Success card ──────────────────────────────── */
.eco-success {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(89,191,56,0.14);
  border-left: 3px solid #59BF38;
  border-radius: 16px;
  padding: 20px 28px;
  text-align: left;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 0 28px rgba(89,191,56,0.06),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

.eco-success-spark {
  font-size: 22px;
  color: #59BF38;
  filter: drop-shadow(0 0 8px rgba(89,191,56,0.5));
  flex-shrink: 0;
}

.eco-success-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 3px;
}

.eco-success-title {
  font-size: 16px;
  font-weight: 800;
  color: #1F6935;
  letter-spacing: -0.02em;
}

/* ─── TARJETAS ───────────────────────────────────────── */
.cards {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 0px;
}

.card {
  background: #ffffff;
  border: 0.5px solid #C6D8C6;
  border-top-width: 3px;
  border-radius: 16px;
  padding: 28px 24px;
  width: 260px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  min-height: unset;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 40px rgba(31, 105, 53, 0.12);
}

.card-student { border-top-color: #59BF38; --accent: #59BF38; }
.card-center  { border-top-color: #1F6935; --accent: #1F6935; }
.card-company { border-top-color: #75947F; --accent: #75947F; }

.card-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 14px;
}

.card-role {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}

.card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1F6935;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 13px;
  color: #75947F;
  line-height: 1.55;
}

.card-cta {
  background: none;
  border: none;
  padding: 0;
  margin-top: 18px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.15s ease;
}

.card-cta:hover {
  gap: 8px;
}

/* ─── SECCIÓN HOW DETALLADA ──────────────────────────── */
.how {
  background: #ffffff;
  border: 0.5px solid #C6D8C6;
  border-radius: 20px;
  padding: 52px 40px;
  margin-top: 56px;
}

.how-title {
  font-size: 24px;
  font-weight: 600;
  color: #1F6935;
  margin-bottom: 10px;
}

.how-sub {
  font-size: 15px;
  color: #75947F;
  margin-bottom: 36px;
}

/* ─── PASOS ──────────────────────────────────────────── */
.steps {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.step {
  max-width: 220px;
  text-align: left;
}

.step-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f0f9e0;
  border: 1px solid #d4efaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #1F6935;
  margin-bottom: 12px;
}

.step h4 {
  font-size: 15px;
  font-weight: 600;
  color: #1F6935;
  margin-bottom: 6px;
}

.step p {
  font-size: 13px;
  color: #75947F;
  line-height: 1.5;
}

.card-student {
  transform: scale(1.03);
  box-shadow: 0 10px 30px rgba(31,105,53,0.15);
}

</style>