<script setup>
const emit = defineEmits(['login', 'formulario'])
</script>

<template>
  <div class="container">
    <div class="content">

      <!-- NAV -->
      <nav class="nav">
        <div class="nav-logo">
          <div class="logo-mark"></div>
          Dualab
        </div>
        <button class="nav-btn" @click="emit('login')">Iniciar sesión</button>
      </nav>

      <!-- HERO -->
      <h1 class="title">
        Conecta con empresas resolviendo retos reales
      </h1>

      <p class="subtitle">
        Dualab conecta estudiantes, centros educativos y empresas en un mismo lugar
      </p>

      <!-- CÓMO FUNCIONA INLINE -->
      <div class="how-inline">
        <div class="how-step">
          <span class="how-num">1</span>
          <span>La empresa crea un reto</span>
        </div>
        <span class="how-sep">→</span>
        <div class="how-step">
          <span class="how-num">2</span>
          <span>El estudiante lo resuelve</span>
        </div>
        <span class="how-sep">→</span>
        <div class="how-step">
          <span class="how-num">3</span>
          <span>La empresa descubre talento</span>
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
      <div class="how">

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
      </div>

    </div>
  </div>
</template>

<style scoped>

/* ─── LAYOUT BASE ────────────────────────────────────── */
.container {
  min-height: 100vh;
  padding: 32px 40px 60px;
  font-family: sans-serif;
  background: linear-gradient(180deg, #f5faf5 0%, #eaf4ea 100%);
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
  margin-bottom: 64px;
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
  background: #1F6935;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.nav-btn:hover {
  opacity: 0.88;
}

/* ─── HERO ───────────────────────────────────────────── */
.title {
  font-size: clamp(28px, 5vw, 46px);
  font-weight: 600;
  color: #1F6935;
  line-height: 1.2;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 17px;
  color: #75947F;
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.65;
}

/* ─── CÓMO FUNCIONA INLINE ───────────────────────────── */
.how-inline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.how-step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #75947F;
}

.how-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #f0f9e0;
  border: 1px solid #d4efaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: #1F6935;
  flex-shrink: 0;
}

.how-sep {
  color: #C6D8C6;
  font-size: 16px;
}

/* ─── TARJETAS ───────────────────────────────────────── */
.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(31, 105, 53, 0.12);
  border-color: #C6D8C6;
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