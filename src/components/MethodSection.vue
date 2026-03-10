<template>
  <section id="method" class="method section-wrapper">
    <div class="method-left reveal">
      <span class="section-label">03 / Notre méthode</span>
      <h2 class="section-title">Experimental<br>Business<br>Design.</h2>
      <p class="method-intro">
        Une approche unique combinant validation terrain, prototypage rapide
        et structuration stratégique.
      </p>
      <div class="steps">
        <div v-for="(step, i) in steps" :key="i" class="step">
          <span class="step-num">{{ step.num }}</span>
          <div>
            <p class="step-title">{{ step.title }}</p>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="method-visual reveal reveal-delay-2">
      <canvas ref="canvasEl" class="orbital-canvas"></canvas>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { STEPS } from '@/data/index.js'
const steps = STEPS
const canvasEl = ref(null)
let animId = null
onMounted(() => setTimeout(initOrbital, 300))
onUnmounted(() => animId && cancelAnimationFrame(animId))

function getColors() {
  const s = getComputedStyle(document.documentElement)
  return {
    text: s.getPropertyValue('--text').trim(),
    muted: s.getPropertyValue('--text-muted').trim(),
    bg: s.getPropertyValue('--invert-bg').trim(),
    inv: s.getPropertyValue('--invert-text').trim()
  }
}
function initOrbital() {
  const canvas = canvasEl.value; if (!canvas) return
  const S = 420; canvas.width = S; canvas.height = S
  const ctx = canvas.getContext('2d'); const cx = S/2, cy = S/2; let t = 0
  const rings = [
    { r: 72,  speed: 0.006,  offset: 0,           label: 'Business Design' },
    { r: 134, speed: -0.004, offset: Math.PI/2.5, label: 'Expérimentation' },
    { r: 188, speed: 0.003,  offset: Math.PI*1.2, label: 'Structuration'   }
  ]
  function draw() {
    ctx.clearRect(0,0,S,S)
    const c = getColors()
    rings.forEach((ring, i) => {
      ctx.beginPath(); ctx.arc(cx,cy,ring.r,0,Math.PI*2)
      ctx.strokeStyle = c.muted; ctx.globalAlpha = 0.18; ctx.lineWidth = 1; ctx.stroke()
      const angle = t * ring.speed * 300 + ring.offset
      for (let j = 10; j >= 0; j--) {
        const ta = angle - j*0.06*(ring.speed > 0 ? 1 : -1)
        const tx = cx+Math.cos(ta)*ring.r, ty = cy+Math.sin(ta)*ring.r
        ctx.globalAlpha = ((10-j)/10)*0.4; ctx.fillStyle = c.text
        ctx.beginPath(); ctx.arc(tx,ty,1.6,0,Math.PI*2); ctx.fill()
      }
      const dx = cx+Math.cos(angle)*ring.r, dy = cy+Math.sin(angle)*ring.r
      ctx.globalAlpha=1; ctx.fillStyle=c.text
      ctx.beginPath(); ctx.arc(dx,dy,3.5,0,Math.PI*2); ctx.fill()
      const lx = cx+Math.cos(angle+0.2)*(ring.r+20), ly = cy+Math.sin(angle+0.2)*(ring.r+20)
      ctx.font="300 9px 'DM Sans',sans-serif"; ctx.fillStyle=c.muted
      ctx.globalAlpha=0.7; ctx.textAlign='center'; ctx.fillText(ring.label,lx,ly+3)
    })
    ctx.beginPath(); ctx.arc(cx,cy,22,0,Math.PI*2)
    ctx.globalAlpha=1; ctx.fillStyle=c.bg; ctx.fill()
    ctx.font="800 8px 'Syne',sans-serif"; ctx.fillStyle=c.inv
    ctx.textAlign='center'; ctx.fillText('CXBD',cx,cy+3)
    t++; animId = requestAnimationFrame(draw)
  }
  draw()
}
</script>

<style scoped>
.method {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  background: var(--bg);
}
.method-intro {
  margin-top: 1.5rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.75;
}
.steps { margin-top: 2rem; }
.step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1rem;
  padding: 1.6rem 0;
  border-top: 1px solid var(--border);
}
.step:last-child { border-bottom: 1px solid var(--border); }
.step:hover .step-title { color: var(--text); }
.step-num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--border);
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
  transition: color 0.3s;
}
.step:hover .step-num { color: var(--surface); }
.step-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
  color: var(--text-sub);
  transition: color 0.2s;
}
.step-desc { color: var(--text-muted); font-size: 0.95rem; font-weight: 300; line-height: 1.7; }

.method-visual {
  position: sticky;
  top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orbital-canvas { width: 100%; max-width: 420px; height: auto; aspect-ratio: 1; }

/* Tablet */
@media (max-width: 1024px) {
  .method { gap: 3rem; }
  .method-visual { display: none; }
}

/* Mobile */
@media (max-width: 768px) {
  .method { grid-template-columns: 1fr; }
  .method-visual { display: none; }
  .step { grid-template-columns: 44px 1fr; padding: 1.2rem 0; }
  .step-num { font-size: 2rem; }
}
</style>
