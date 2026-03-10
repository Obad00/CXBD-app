<template>
  <section class="hero">
    <canvas ref="canvasEl" class="hero-canvas"></canvas>
    <div class="hero-fade"></div>

    <div class="hero-inner">
      <p class="hero-tag" :class="{ visible: ready }">
        Dakar, Sénégal — Incubateur Stratégique
      </p>
      <h1 class="hero-title" :class="{ visible: ready }">
        Designing the<br><em>next generation</em><br>of Senegalese<br>startups.
      </h1>
      <div class="hero-bottom" :class="{ visible: ready }">
        <p class="hero-sub">
          Transforming Senegalese ideas into viable,<br class="hide-mobile">
          scalable and nationally aligned companies.
        </p>
        <div class="hero-actions">
          <RouterLink to="/apply" class="btn-primary">Apply to program</RouterLink>
          <a href="#method" class="btn-ghost">Our model</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const canvasEl = ref(null)
const ready = ref(false)
let animId = null

onMounted(() => {
  setTimeout(() => { ready.value = true }, 200)
  initCanvas()
})
onUnmounted(() => animId && cancelAnimationFrame(animId))

function getColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#000'
}

function initCanvas() {
  const canvas = canvasEl.value; if (!canvas) return
  const ctx = canvas.getContext('2d')
  let W = 0, H = 0, t = 0

  function resize() {
    W = canvas.width  = canvas.offsetWidth  || window.innerWidth
    H = canvas.height = canvas.offsetHeight || window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize, { passive: true })

  function draw() {
    if (!W || !H) { animId = requestAnimationFrame(draw); return }
    ctx.clearRect(0, 0, W, H)
    const color = getColor()
    const cols = 18, rows = 10
    const cw = W / cols, ch = H / rows

    for (let i = 0; i <= cols; i++) {
      const wave = Math.sin(t * 0.7 + i * 0.28) * 3
      ctx.globalAlpha = 0.07 + Math.sin(t * 0.4 + i * 0.35) * 0.025
      ctx.strokeStyle = color; ctx.lineWidth = 0.6
      ctx.beginPath(); ctx.moveTo(i*cw+wave, 0); ctx.lineTo(i*cw-wave, H); ctx.stroke()
    }
    for (let j = 0; j <= rows; j++) {
      const wave = Math.sin(t * 0.55 + j * 0.4) * 3
      ctx.globalAlpha = 0.07 + Math.sin(t * 0.35 + j * 0.45) * 0.025
      ctx.strokeStyle = color; ctx.lineWidth = 0.6
      ctx.beginPath(); ctx.moveTo(0, j*ch+wave); ctx.lineTo(W, j*ch-wave); ctx.stroke()
    }
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const a = (Math.sin(t*1.1 + i*0.55 + j*0.32) + 1) / 2
        if (a > 0.8) {
          ctx.globalAlpha = (a - 0.8) * 1.4
          ctx.fillStyle = color
          ctx.beginPath(); ctx.arc(i*cw, j*ch, 1.1, 0, Math.PI*2); ctx.fill()
        }
      }
    }
    t += 0.01
    animId = requestAnimationFrame(draw)
  }
  draw()
}
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  background: var(--bg);
  padding-top: 5rem; /* space for fixed nav */
}
.hero-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}
.hero-fade {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 45%;
  background: linear-gradient(to top, var(--bg), transparent);
  pointer-events: none; z-index: 1;
}
.hero-inner {
  position: relative; z-index: 2;
  padding: 0 5rem 5rem;
}
.hero-tag {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.8rem;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}
.hero-tag.visible { opacity: 1; transform: translateY(0); }

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7.5vw, 8rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.035em;
  color: var(--text);
  opacity: 0; transform: translateY(36px);
  transition: opacity 0.9s ease 0.3s, transform 0.9s var(--ease-out-expo) 0.3s;
}
.hero-title.visible { opacity: 1; transform: translateY(0); }
.hero-title em { font-style: italic; color: var(--text-muted); }

.hero-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 2rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.8s ease 0.65s, transform 0.8s var(--ease-out-expo) 0.65s;
}
.hero-bottom.visible { opacity: 1; transform: translateY(0); }

.hero-sub {
  color: var(--text-sub);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75;
}
.hero-actions { display: flex; gap: 0.8rem; flex-shrink: 0; }

/* Tablet */
@media (max-width: 1024px) {
  .hero-inner { padding: 0 3rem 4rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .hero { min-height: 100svh; }
  .hero-inner { padding: 0 1.4rem 3rem; }
  .hero-title { font-size: clamp(2.6rem, 11vw, 4rem); }
  .hero-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .hero-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero-actions a { text-align: center; }
  .hide-mobile { display: none; }
}

/* Small mobile */
@media (max-width: 380px) {
  .hero-inner { padding: 0 1rem 2.5rem; }
  .hero-title { font-size: clamp(2.2rem, 11vw, 3rem); }
}
</style>
