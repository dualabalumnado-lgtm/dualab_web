<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FeatureSection from '@/components/FeatureSection.vue'


const emit = defineEmits(['login', 'formulario'])
const router = useRouter()

const resultsRef = ref(null)
const resultsVisible = ref(false)

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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
            <button class="hero-cta-ghost" @click="router.push('/familias')">Explorar retos</button>
          </div>
        </div>

        <!-- RIGHT: ecosistema visual -->
        <div class="hero-right">
          <div class="hcard-scene">

            <!-- Badge flotante top-right -->
            <div class="hchip hchip--tr">
              <span class="hchip-dot"></span>
              Retos reales
            </div>

            <!-- Badge flotante top-left -->
            <div class="hbadge hbadge--tl">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.8 9.5L10 3" stroke="#1F6935" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Microreto validado
            </div>

            <!-- Card principal: tres perfiles -->
            <div class="hcard-main">

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

            <!-- Badge flotante bottom-left -->
            <div class="hbadge hbadge--bl">
              <span class="hbadge-dot"></span>
              Portfolio práctico
            </div>

            <!-- Acento flotante bottom-right -->
            <div class="hfloat hfloat--accent">
              <span class="hfloat-spark">✦</span>
              <span class="hfloat-accent-text">Aprendizaje conectado</span>
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

      <!-- BLOQUES PREMIUM -->
      <div class="features-header">
        <span class="features-eyebrow">Para cada perfil</span>
        <h2 class="features-title">Una plataforma,<br><em class="features-accent">tres experiencias</em></h2>
      </div>

      <div class="features-list">

        <FeatureSection
          id="bloque-estudiantes"
          badge="Estudiantes"
          title="Construye tu <em>portafolio real</em> antes de las prácticas"
          description="Resuelve retos reales de empresas desde el aula. Demuestra lo que sabes con proyectos que importan, no con exámenes."
          :benefits="[
            'Accede a retos publicados por empresas reales',
            'Desarrolla proyectos aplicables a tu sector',
            'Construye un portafolio antes de las prácticas',
            'Recibe feedback directo de profesionales',
          ]"
          button-text="Ver demo"
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=700&fit=crop&q=85&auto=format"
          image-alt="Alumnado trabajando en proyectos reales"
          :reverse="false"
          @cta="router.push('/familias')"
        />

        <FeatureSection
          id="bloque-centros"
          badge="Centros educativos"
          title="Conecta tu aula con la <em>empresa real</em>"
          description="Gestiona tu alumnado, asigna retos por perfil formativo y haz seguimiento del progreso de cada grupo desde un único panel."
          :benefits="[
            'Panel de gestión de alumnos y grupos',
            'Asignación de retos por ciclo formativo',
            'Seguimiento en tiempo real del progreso',
            'Vinculación directa con empresas de tu sector',
          ]"
          button-text="Ver demo"
          image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=700&fit=crop&q=85&auto=format"
          image-alt="Centro educativo gestionando alumnado"
          :reverse="true"
          @cta="router.push('/familias')"
        />

        <FeatureSection
          id="bloque-empresas"
          badge="Empresas"
          title="Publica tus retos y descubre <em>talento preparado</em>"
          description="Accede a alumnado formado en tu sector y observa cómo resuelven tus desafíos reales. La primera conexión antes de las prácticas."
          :benefits="[
            'Publica retos adaptados a tu necesidad real',
            'Filtra por perfil formativo y especialidad',
            'Observa soluciones antes de contratar',
            'Primera toma de contacto sin compromiso',
          ]"
          button-text="Ver demo"
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop&q=85&auto=format"
          image-alt="Empresa revisando soluciones de alumnado"
          :reverse="false"
          @cta="router.push('/familias')"
        />

      </div>

    </div>
  </div>

</template>

<style scoped>

/* ─── LAYOUT ───────────────────────────────────────────── */
.container {
  min-height: 100vh;
  padding: 14px 32px 64px;
  font-family: sans-serif;
  background: linear-gradient(160deg, #f2f7ec 0%, #ffffff 45%, #f6f8fb 100%);
}

.content {
  max-width: 1160px;
  margin: auto;
}

/* ─── HERO 2 COLS ───────────────────────────────────────── */
.hero {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 48px;
  align-items: center;
  padding: 32px 0 48px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-badge {
  display: inline-block;
  background: rgba(89,191,56,0.09);
  border: 1px solid rgba(89,191,56,0.20);
  border-radius: 999px;
  padding: 4px 13px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #1F6935;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(38px, 4.6vw, 60px);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: #111827;
  margin-bottom: 18px;
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
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 28px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.hero-cta-primary {
  background: linear-gradient(135deg, #22c55e, #59BF38);
  color: #fff;
  font-weight: 700;
  font-size: 14.5px;
  padding: 12px 24px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 3px 14px rgba(89,191,56,0.28);
}

.hero-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(89,191,56,0.38);
}

.hero-cta-ghost {
  background: rgba(255,255,255,0.55);
  color: #1F6935;
  font-weight: 600;
  font-size: 14.5px;
  padding: 12px 24px;
  border-radius: 11px;
  border: 1px solid rgba(31,105,53,0.14);
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.hero-cta-ghost:hover {
  background: white;
  box-shadow: 0 3px 12px rgba(0,0,0,0.06);
}

/* ─── HERO RIGHT — ECOSISTEMA ───────────────────────────── */
.hero-right {
  align-self: center;
}

.hcard-scene {
  position: relative;
  padding: 44px 20px 52px 20px;
}

/* ── chips y badges flotantes ── */
.hchip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: linear-gradient(135deg, #1F6935, #2a7d40);
  border-radius: 999px;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  box-shadow:
    0 4px 14px rgba(31, 105, 53, 0.28),
    0 2px 6px rgba(89, 191, 56, 0.18);
}

.hchip--tr {
  top: 6px;
  right: 0;
  animation: floatA 4s ease-in-out infinite;
}

.hchip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #AEE565;
  box-shadow: 0 0 7px rgba(174, 229, 101, 0.80);
  animation: pulse 2s ease-in-out infinite;
}

/* mini badges secundarios */
.hbadge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(89, 191, 56, 0.20);
  border-radius: 999px;
  padding: 6px 13px;
  font-size: 11.5px;
  font-weight: 600;
  color: #1F6935;
  white-space: nowrap;
  box-shadow:
    0 2px 8px rgba(31, 105, 53, 0.10),
    0 8px 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

.hbadge--tl {
  top: 10px;
  left: -8px;
  animation: floatB 3.8s ease-in-out infinite;
}

.hbadge--bl {
  bottom: 8px;
  left: -4px;
  animation: floatB 4.6s ease-in-out 0.4s infinite;
}

.hbadge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #59BF38;
  box-shadow: 0 0 6px rgba(89, 191, 56, 0.55);
  animation: pulse 2.4s ease-in-out infinite;
}

/* ── card principal ── */
.hcard-main {
  position: relative;
  background: rgba(248, 253, 248, 0.75);
  backdrop-filter: blur(28px) saturate(1.6);
  -webkit-backdrop-filter: blur(28px) saturate(1.6);
  border-radius: 28px;
  padding: 8px 0;
  /* borde gradiente via pseudo-element */
  z-index: 0;
  box-shadow:
    0 8px 24px rgba(31, 105, 53, 0.10),
    0 24px 56px rgba(0, 0, 0, 0.07),
    0 48px 80px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}

.hcard-main::before {
  content: '';
  position: absolute;
  inset: -1.5px;
  border-radius: 29.5px;
  background: linear-gradient(
    145deg,
    rgba(89, 191, 56, 0.55) 0%,
    rgba(174, 229, 101, 0.35) 35%,
    rgba(255, 255, 255, 0.15) 60%,
    rgba(89, 191, 56, 0.30) 100%
  );
  z-index: -1;
}

.hcard-main:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 32px rgba(31, 105, 53, 0.14),
    0 32px 64px rgba(0, 0, 0, 0.09),
    0 56px 96px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.98);
}

/* ── items de perfil dentro del card ── */
.impact-item {
  position: relative;
  z-index: 1;
  padding: 20px 26px;
  border-radius: 18px;
  margin: 4px 4px;
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
  color: #1F6935;
  margin-bottom: 7px;
}

.impact-who::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #59BF38;
  flex-shrink: 0;
  box-shadow: 0 0 7px rgba(89, 191, 56, 0.55);
}

.impact-desc {
  font-size: 13.5px;
  color: #4b5563;
  line-height: 1.65;
  margin: 0;
}

.impact-divider {
  height: 1px;
  background: rgba(89, 191, 56, 0.09);
  margin: 0 26px;
}

/* ── acento flotante inferior ── */
.hfloat {
  position: absolute;
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.90);
  border-radius: 18px;
  padding: 11px 16px;
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.06),
    0 12px 32px rgba(31, 105, 53, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  gap: 9px;
}

.hfloat--accent {
  bottom: 4px;
  right: -10px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(89, 191, 56, 0.22);
  animation: floatB 4.2s ease-in-out infinite;
  box-shadow:
    0 4px 16px rgba(31, 105, 53, 0.12),
    0 12px 32px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.98);
}

.hfloat-spark {
  font-size: 15px;
  color: #59BF38;
  filter: drop-shadow(0 0 7px rgba(89, 191, 56, 0.65));
  flex-shrink: 0;
}

.hfloat-accent-text {
  font-size: 12px;
  font-weight: 600;
  color: #1F6935;
  white-space: nowrap;
}

/* ── animaciones ── */
@keyframes floatA {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-7px); }
}

@keyframes floatB {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(89, 191, 56, 0.60); }
  50%       { opacity: 0.7; box-shadow: 0 0 12px rgba(89, 191, 56, 0.90); }
}

/* ─── ECOSISTEMA ────────────────────────────────────────── */
.eco-section {
  margin-bottom: 24px;
}

.eco-label {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 16px;
}

.flow {
  display: grid;
  grid-template-columns: 1.45fr 1fr 1fr;
  gap: 12px;
  align-items: stretch;
}

.flow-photo {
  position: relative;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 8px 28px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.34s cubic-bezier(0.22, 1, 0.36, 1);
}

.flow-photo--lead {
  border-radius: 20px;
}

.flow-photo:hover {
  transform: translateY(-4px) scale(1.004);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.10),
    0 16px 44px rgba(0, 0, 0, 0.18);
}

.flow-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.82;
  filter: contrast(1.05) saturate(1.04);
  transition:
    transform 0.65s ease-out,
    opacity 0.38s ease;
}

.flow-photo:hover img {
  transform: scale(1.04);
  opacity: 0.90;
}

.flow-photo-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(9, 21, 18, 0.22) 0%, transparent 40%),
    linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.18) 44%, transparent 100%);
}

.flow-photo-info {
  position: absolute;
  bottom: 14px;
  left: 14px;
  padding: 8px 14px 9px;
  background: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
}

.flow-actor {
  display: block;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(174, 229, 101, 0.75);
}

.flow-action {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

/* ─── RESULTADOS ────────────────────────────────────────── */
.results {
  padding: 16px 0 24px;
  position: relative;
}

.results-head {
  text-align: center;
  margin-bottom: 20px;
}

.results-eyebrow {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 6px;
}

.results-title {
  font-size: clamp(20px, 2.2vw, 30px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #374151;
  font-style: normal;
}

.results-accent {
  font-style: normal;
  background: linear-gradient(135deg, #22c55e 0%, #59BF38 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Bloque resultado — ahora claro y premium */
.results-finale {
  position: relative;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid rgba(89, 191, 56, 0.16);
  border-radius: 18px;
  padding: 20px 32px;
  overflow: hidden;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.95) inset,
    0 2px 12px rgba(89, 191, 56, 0.07),
    0 8px 32px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(20px);
}

.results--visible .results-finale {
  animation: fadeUp 0.50s ease 0.20s forwards;
}

.results-finale-glow {
  position: absolute;
  top: -40px; right: -40px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(89, 191, 56, 0.10) 0%, transparent 65%);
  pointer-events: none;
}

.results-finale-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;
  z-index: 1;
}

.results-finale-spark {
  font-size: 22px;
  color: #59BF38;
  filter: drop-shadow(0 0 8px rgba(89, 191, 56, 0.40));
  flex-shrink: 0;
  line-height: 1;
}

.results-finale-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 4px;
}

.results-finale-text {
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  line-height: 1.65;
  letter-spacing: -0.01em;
  max-width: 640px;
}

.results-finale-text strong {
  color: #1F6935;
  font-weight: 700;
}

/* ─── BLOQUES PREMIUM ───────────────────────────────────── */
.features-header {
  text-align: center;
  padding: 36px 0 12px;
}

.features-eyebrow {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #59BF38;
  margin-bottom: 8px;
}

.features-title {
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #111827;
  font-style: normal;
}

.features-accent {
  font-style: normal;
  background: linear-gradient(to right, #22c55e, #59BF38);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

/* ─── FEEDBACK EMPRESA ──────────────────────────────────── */
.feedback-section {
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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

/* ─── DARK MODE ─────────────────────────────────────────── */
:global(.dark) .container {
  background: linear-gradient(160deg, #0d1117 0%, #0d1117 100%);
}

:global(.dark) .hero-title {
  color: #f0f6fc;
}

:global(.dark) .hero-sub {
  color: #8b949e;
}

:global(.dark) .hero-badge {
  background: rgba(89, 191, 56, 0.12);
  border-color: rgba(89, 191, 56, 0.25);
  color: #6dd147;
}

:global(.dark) .hero-cta-ghost {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(174, 229, 101, 0.20);
  color: #AEE565;
}

:global(.dark) .hero-cta-ghost:hover {
  background: rgba(255, 255, 255, 0.10);
}

:global(.dark) .hcard-main {
  background: rgba(22, 27, 34, 0.85);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.30),
    0 24px 56px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

:global(.dark) .impact-desc {
  color: #8b949e;
}

:global(.dark) .impact-divider {
  background: rgba(255, 255, 255, 0.06);
}

:global(.dark) .hbadge {
  background: rgba(22, 27, 34, 0.90);
  border-color: rgba(89, 191, 56, 0.20);
}

:global(.dark) .hfloat {
  background: rgba(22, 27, 34, 0.88);
  border-color: rgba(255, 255, 255, 0.08);
}

:global(.dark) .hfloat--accent {
  border-color: rgba(89, 191, 56, 0.20);
}

:global(.dark) .hfloat-accent-text {
  color: #AEE565;
}

:global(.dark) .eco-label {
  color: #6dd147;
}

:global(.dark) .feedback-flow {
  background: rgba(22, 27, 34, 0.60);
  border-color: rgba(89, 191, 56, 0.12);
}

:global(.dark) .feedback-step-label {
  color: #c9d1d9;
}

:global(.dark) .feedback-step--highlight .feedback-step-label {
  color: #AEE565;
}

:global(.dark) .feedback-quote {
  background: #161b22;
  border-color: rgba(255, 255, 255, 0.08);
}

:global(.dark) .feedback-quote-text {
  color: #c9d1d9;
}

:global(.dark) .feedback-author-role {
  color: #6b7280;
}

:global(.dark) .results-title {
  color: #c9d1d9;
}

:global(.dark) .results-finale {
  background: rgba(22, 27, 34, 0.80);
  border-color: rgba(89, 191, 56, 0.12);
}

:global(.dark) .results-finale-text {
  color: #c9d1d9;
}

:global(.dark) .features-title {
  color: #f0f6fc;
}

</style>
