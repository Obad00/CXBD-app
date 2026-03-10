<template>
  <section id="governance" class="governance section-wrapper">
    <div class="gov-left reveal">
      <span class="section-label">07 / Gouvernance</span>
      <h2 class="section-title">Structuré<br>pour durer.</h2>
      <p class="gov-intro">
        Une architecture de gouvernance hybride garantissant transparence,
        impact et pérennité.
      </p>
      <div class="gov-levels">
        <div v-for="level in levels" :key="level.num" class="gov-level">
          <span class="gov-num">{{ level.num }}</span>
          <div>
            <p class="gov-title">{{ level.title }}</p>
            <p class="gov-desc">{{ level.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="gov-right reveal reveal-delay-2">
      <div class="gov-box">
        <p class="box-label">Structure hybride</p>
        <div class="model-tags">
          <span v-for="tag in modelTags" :key="tag" class="model-tag">{{ tag }}</span>
        </div>
      </div>
      <div class="gov-quote">
        <div class="quote-bar"></div>
        <p class="quote-text">
          "Le CXBD se positionne comme le laboratoire national d'expérimentation
          entrepreneuriale au service du Sénégal."
        </p>
        <p class="quote-attr">Conseil d'Administration — CXBD</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GOV_LEVELS, MODEL_TAGS } from '@/data/index.js'
const levels = GOV_LEVELS
const modelTags = MODEL_TAGS
</script>

<style scoped>
.governance {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  background: var(--bg);
}
.gov-intro {
  margin-top: 1.5rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.75;
}
.gov-levels { margin-top: 2rem; }
.gov-level {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.4rem 0;
  border-top: 1px solid var(--border);
}
.gov-level:last-child { border-bottom: 1px solid var(--border); }
.gov-level:hover .gov-title { color: var(--text); }
.gov-num {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-muted);
  min-width: 22px;
  padding-top: 0.2rem;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}
.gov-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-sub);
  margin-bottom: 0.3rem;
  letter-spacing: -0.02em;
  transition: color 0.2s;
}
.gov-desc {
  color: var(--text-muted);
  font-size: 0.83rem;
  font-weight: 300;
  line-height: 1.6;
}
.gov-box {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  padding: 2rem;
  margin-bottom: 1.2rem;
}
.box-label {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
  display: block;
}
.model-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.model-tag {
  font-size: 0.76rem;
  color: var(--text-sub);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.4rem 0.8rem;
  font-weight: 300;
  transition: background 0.2s, color 0.2s;
}
.model-tag:hover { background: var(--border); color: var(--text); }

.gov-quote {
  padding: 2rem;
  background: var(--bg-alt);
  border: 1px solid var(--border);
}
.quote-bar { width: 28px; height: 2px; background: var(--text-muted); margin-bottom: 1.2rem; }
.quote-text {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: var(--text-sub);
  margin-bottom: 1rem;
}
.quote-attr {
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Tablet */
@media (max-width: 1024px) {
  .governance { gap: 3.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .governance {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .gov-box { padding: 1.5rem; }
  .gov-quote { padding: 1.5rem; }
}
</style>
