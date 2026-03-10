<template>
  <section id="ecosystem" class="eco section-wrapper">
    <div class="eco-left reveal">
      <span class="section-label">05 / Réseau & Écosystème</span>
      <h2 class="section-title">Un connecteur<br>d'écosystèmes.</h2>
      <p class="eco-intro">
        Le CXBD active un réseau stratégique entre acteurs publics, privés,
        académiques et diaspora.
      </p>
      <div class="eco-list">
        <div
          v-for="(node, i) in nodes"
          :key="node.id"
          class="eco-item"
          :class="{ active: hovered === i }"
          @mouseenter="hovered = i"
          @mouseleave="hovered = -1"
        >
          <span class="eco-icon">{{ node.icon }}</span>
          <div>
            <p class="eco-label">{{ node.label }}</p>
            <p class="eco-desc">{{ node.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="eco-right reveal reveal-delay-3">
      <canvas ref="canvasEl" class="eco-canvas"></canvas>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ECO_NODES } from '@/data/index.js'
const nodes = ECO_NODES
const hovered = ref(-1)
const canvasEl = ref(null)
let animId = null
onMounted(() => setTimeout(initNetwork, 300))
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
function initNetwork() {
  const canvas = canvasEl.value; if (!canvas) return
  const S = 420; canvas.width = S; canvas.height = S
  const ctx = canvas.getContext('2d'); let t = 0
  const pts = [
    { x:0.5,  y:0.5,  r:20, center:true, label:'CXBD' },
    { x:0.5,  y:0.1,  r:10, label:'Entrepreneurs' },
    { x:0.88, y:0.28, r:10, label:'Institutions' },
    { x:0.88, y:0.72, r:10, label:'Corporates' },
    { x:0.5,  y:0.9,  r:10, label:'Investisseurs' },
    { x:0.12, y:0.72, r:10, label:'Diaspora' },
    { x:0.12, y:0.28, r:10, label:'Universités' }
  ]
  function draw() {
    ctx.clearRect(0,0,S,S)
    const c = getColors()
    const animated = pts.map((n,i) => ({
      ...n,
      cx: n.x*S + (n.center ? 0 : Math.sin(t*0.009+i*1.4)*7),
      cy: n.y*S + (n.center ? 0 : Math.cos(t*0.007+i*0.9)*7)
    }))
    const center = animated[0]
    animated.slice(1).forEach((n,i) => {
      const pulse = (Math.sin(t*0.025+i*0.9)+1)/2
      ctx.globalAlpha = 0.07 + pulse*0.09
      ctx.strokeStyle=c.text; ctx.lineWidth=0.8
      ctx.beginPath(); ctx.moveTo(center.cx,center.cy); ctx.lineTo(n.cx,n.cy); ctx.stroke()
      const pp = ((t*0.012+i*0.22)%1)
      const px = center.cx+(n.cx-center.cx)*pp, py = center.cy+(n.cy-center.cy)*pp
      ctx.globalAlpha=0.35*pulse; ctx.fillStyle=c.text
      ctx.beginPath(); ctx.arc(px,py,1.8,0,Math.PI*2); ctx.fill()
    })
    animated.forEach((n,i) => {
      const isHov = hovered.value === i-1
      if (n.center) {
        for (let r=1;r<=3;r++) {
          ctx.beginPath(); ctx.arc(n.cx,n.cy,n.r+r*12+Math.sin(t*0.035)*3,0,Math.PI*2)
          ctx.strokeStyle=c.text; ctx.globalAlpha=0.05-r*0.012; ctx.lineWidth=1; ctx.stroke()
        }
        ctx.beginPath(); ctx.arc(n.cx,n.cy,n.r,0,Math.PI*2)
        ctx.globalAlpha=1; ctx.fillStyle=c.bg; ctx.fill()
        ctx.font="800 8px 'Syne',sans-serif"; ctx.fillStyle=c.inv
        ctx.textAlign='center'; ctx.fillText('CXBD',n.cx,n.cy+3)
      } else {
        ctx.beginPath(); ctx.arc(n.cx,n.cy,n.r,0,Math.PI*2)
        ctx.globalAlpha=isHov?0.22:0.09; ctx.fillStyle=c.text; ctx.fill()
        ctx.strokeStyle=c.text; ctx.globalAlpha=isHov?0.45:0.18; ctx.lineWidth=1; ctx.stroke()
        ctx.font="400 8px 'DM Sans',sans-serif"
        ctx.fillStyle=c.muted; ctx.globalAlpha=isHov?1:0.55
        ctx.fillText(n.label,n.cx,n.cy+n.r+12)
      }
    })
    t++; animId = requestAnimationFrame(draw)
  }
  draw()
}
</script>

<style scoped>
.eco {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.eco-intro {
  margin-top: 1.5rem;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 1.8rem;
}
.eco-list { display: flex; flex-direction: column; }
.eco-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.9rem 0.8rem;
  border: 1px solid transparent;
  margin-bottom: -1px;
  transition: border-color 0.2s, background 0.2s;
  cursor: default;
}
.eco-item:hover, .eco-item.active {
  border-color: var(--border);
  background: var(--surface);
}
.eco-icon { font-size: 1.1rem; line-height: 1; padding-top: 0.1rem; flex-shrink: 0; }
.eco-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-sub);
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
}
.eco-desc { font-size: 0.76rem; color: var(--text-muted); font-weight: 300; }

.eco-right { display: flex; align-items: center; justify-content: center; }
.eco-canvas { width: 100%; max-width: 420px; height: auto; aspect-ratio: 1; }

/* Tablet */
@media (max-width: 1024px) {
  .eco { gap: 3rem; }
  .eco-right { display: none; }
}

/* Mobile */
@media (max-width: 768px) {
  .eco { grid-template-columns: 1fr; }
  .eco-right { display: none; }
  .eco-item { padding: 0.9rem 0.6rem; }
}
</style>
