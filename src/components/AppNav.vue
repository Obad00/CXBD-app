<template>
  <!-- Overlay pour fermer en cliquant dehors -->
  <div v-if="menuOpen" class="nav-overlay" @click="menuOpen = false"></div>

  <nav :class="['app-nav', { 'is-scrolled': isScrolled, 'menu-open': menuOpen }]">
    <RouterLink to="/" class="nav-logo" @click="menuOpen = false">
      CXBD <span>SN</span>
    </RouterLink>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li><a href="/#vision" @click="scrollTo('vision')">Vision</a></li>
      <li><a href="/#sectors" @click="scrollTo('sectors')">Secteurs</a></li>
      <li><RouterLink to="/programs">Programmes</RouterLink></li>
      <li><a href="/#impact" @click="scrollTo('impact')">Impact</a></li>
    </ul>

    <!-- Desktop right -->
    <div class="nav-right">
      <button class="theme-btn" @click="theme.toggle()" :aria-label="theme.isDark ? 'Mode clair' : 'Mode sombre'">
        <!-- Sun -->
        <svg v-if="theme.isDark" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <!-- Moon -->
        <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
      <RouterLink to="/apply" class="nav-cta">Candidater →</RouterLink>
    </div>

    <!-- Burger button -->
    <button
      class="burger"
      :class="{ 'is-open': menuOpen }"
      @click="menuOpen = !menuOpen"
      :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      aria-expanded="menuOpen"
    >
      <span class="burger-line top"></span>
      <span class="burger-line bottom"></span>
    </button>
  </nav>

  <!-- Mobile menu — outside nav so z-index stacks properly -->
  <div class="mobile-menu" :class="{ 'is-open': menuOpen }">
    <div class="mobile-menu-inner">
      <a href="/#vision"   class="mobile-link" @click="close('vision')">Vision</a>
      <a href="/#sectors"  class="mobile-link" @click="close('sectors')">Secteurs</a>
      <RouterLink to="/programs" class="mobile-link" @click="menuOpen = false">Programmes</RouterLink>
      <a href="/#impact"   class="mobile-link" @click="close('impact')">Impact</a>

      <div class="mobile-footer">
        <button class="mobile-theme-btn" @click="theme.toggle()">
          <span>{{ theme.isDark ? '☀️' : '🌙' }}</span>
          {{ theme.isDark ? 'Mode clair' : 'Mode sombre' }}
        </button>
        <RouterLink to="/apply" class="mobile-apply" @click="menuOpen = false">
          Candidater →
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useThemeStore } from '@/stores/theme.js'

const theme      = useThemeStore()
const isScrolled = ref(false)
const menuOpen   = ref(false)

// Bloquer le scroll quand menu ouvert
watch(menuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function scrollTo(id) {
  menuOpen.value = false
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, 350)
}

function close(id) {
  menuOpen.value = false
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, 400)
}

function onScroll() { isScrolled.value = window.scrollY > 40 }
onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ── Nav bar ─────────────────────────────────────────────────── */
.app-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 5rem;
  transition: background 0.35s, border-color 0.35s, padding 0.3s;
}
.app-nav.is-scrolled {
  padding: 1rem 5rem;
  border-bottom: 1px solid var(--border);
}
:global(html.dark)      .app-nav.is-scrolled { background: rgba(8,8,8,0.9); backdrop-filter: blur(20px); }
:global(html:not(.dark)) .app-nav.is-scrolled { background: rgba(245,245,240,0.92); backdrop-filter: blur(20px); }

/* ── Logo ───────────────────────────────────────────────────── */
.nav-logo {
  font-family: var(--font-display);
  font-size: 1rem; font-weight: 800; letter-spacing: -0.02em;
  color: var(--text); text-decoration: none;
  position: relative; z-index: 201;
  transition: color 0.3s;
}
.nav-logo span { color: var(--text-muted); }

/* ── Desktop links ──────────────────────────────────────────── */
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  color: var(--text-muted); text-decoration: none;
  font-size: 0.8rem; font-weight: 400;
  letter-spacing: 0.06em; text-transform: uppercase;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }

/* ── Desktop right ──────────────────────────────────────────── */
.nav-right { display: flex; align-items: center; gap: 0.8rem; }

.theme-btn {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border: 1px solid var(--border); background: transparent;
  color: var(--text-muted); cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  flex-shrink: 0;
}
.theme-btn:hover { border-color: var(--text-sub); color: var(--text); background: var(--surface); }

.nav-cta {
  background: var(--invert-bg); color: var(--invert-text);
  border: none; padding: 0.62rem 1.3rem;
  font-family: var(--font-display); font-weight: 700;
  font-size: 0.78rem; letter-spacing: 0.05em; text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.2s;
}
.nav-cta:hover { opacity: 0.8; }

/* ── Burger ─────────────────────────────────────────────────── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  width: 36px; height: 36px;
  background: none; border: none; cursor: pointer;
  position: relative; z-index: 201;
  padding: 0;
}
.burger-line {
  display: block;
  width: 24px; height: 1.5px;
  background: var(--text);
  position: absolute; left: 6px;
  transform-origin: center;
  transition: transform 0.35s var(--ease-out-expo), opacity 0.2s;
}
.burger-line.top    { top: 13px; }
.burger-line.bottom { top: 21px; }

/* X state */
.burger.is-open .burger-line.top    { transform: translateY(4px) rotate(45deg); }
.burger.is-open .burger-line.bottom { transform: translateY(-4px) rotate(-45deg); }

/* ── Overlay ────────────────────────────────────────────────── */
.nav-overlay {
  position: fixed; inset: 0;
  background: transparent;
  z-index: 149;
}

/* ── Mobile menu ────────────────────────────────────────────── */
.mobile-menu {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 100dvh;
  background: var(--bg);
  z-index: 150;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-out-expo), background 0.3s;
  overflow-y: auto;
}
.mobile-menu.is-open { transform: translateX(0); }

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 3rem;
  min-height: 100%;
}

.mobile-link {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em;
  color: var(--text); text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s, padding-left 0.2s;
}
.mobile-link:hover { color: var(--text-muted); padding-left: 0.5rem; }

.mobile-footer {
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-theme-btn {
  display: flex; align-items: center; gap: 0.75rem;
  width: 100%; padding: 1rem 1.2rem;
  background: var(--bg-alt); color: var(--text-sub);
  border: 1px solid var(--border);
  font-family: var(--font-display); font-size: 0.88rem; font-weight: 600;
  letter-spacing: 0.04em; text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.mobile-theme-btn:hover { background: var(--surface); color: var(--text); }

.mobile-apply {
  display: block; text-align: center;
  background: var(--invert-bg); color: var(--invert-text);
  padding: 1.1rem;
  font-family: var(--font-display); font-size: 0.9rem; font-weight: 700;
  letter-spacing: 0.05em; text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.2s;
}
.mobile-apply:hover { opacity: 0.85; }

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 900px) {
  .app-nav { padding: 1rem 1.5rem; }
  .app-nav.is-scrolled { padding: 0.9rem 1.5rem; }
  .nav-links { display: none; }
  .nav-right  { display: none; }
  .burger     { display: flex; }
}

@media (min-width: 901px) {
  .mobile-menu { display: none !important; }
  .nav-overlay { display: none !important; }
}
</style>
