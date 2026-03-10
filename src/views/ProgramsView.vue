<template>
  <div class="programs-page">

    <!-- Hero -->
    <section class="page-hero section-wrapper">
      <span class="section-label">Programmes CXBD</span>
      <h1 class="page-title">Four paths<br>to scale.</h1>
      <p class="page-sub">
        Quatre programmes conçus pour accompagner les entrepreneurs sénégalais
        à chaque étape de leur parcours — de l'idée brute à l'impact national.
      </p>
    </section>

    <!-- Nav rapide des programmes -->
    <nav class="prog-nav">
      <a
        v-for="prog in programs"
        :key="prog.id"
        :href="`#${prog.id}`"
        class="prog-nav-item"
        :class="{ active: activeId === prog.id }"
        @click.prevent="scrollToProgram(prog.id)"
      >
        <span class="prog-nav-icon">{{ prog.icon }}</span>
        <span class="prog-nav-label">{{ prog.title }}</span>
      </a>
    </nav>

    <div class="divider"></div>

    <!-- Détail de chaque programme -->
    <section
      v-for="(prog, idx) in programDetails"
      :key="prog.id"
      :id="prog.id"
      class="prog-section section-wrapper"
      :class="{ 'prog-section--alt': idx % 2 === 1 }"
    >
      <!-- En-tête -->
      <div class="prog-header">
        <div class="prog-header-left">
          <div class="prog-badge">
            <span class="prog-num">{{ prog.num }}</span>
            <span class="prog-icon">{{ prog.icon }}</span>
          </div>
          <div>
            <span class="section-label">{{ prog.category }}</span>
            <h2 class="prog-title">{{ prog.title }}</h2>
          </div>
        </div>
        <div class="prog-meta-pills">
          <span v-for="tag in prog.tags" :key="tag" class="meta-pill">{{ tag }}</span>
        </div>
      </div>

      <!-- Contenu -->
      <div class="prog-body">
        <div class="prog-body-left">
          <p class="prog-desc-long">{{ prog.descLong }}</p>

          <!-- Pour qui -->
          <div class="prog-block">
            <p class="prog-block-title">Pour qui ?</p>
            <ul class="prog-list">
              <li v-for="item in prog.forWho" :key="item">{{ item }}</li>
            </ul>
          </div>

          <!-- Ce que vous apprendrez -->
          <div class="prog-block">
            <p class="prog-block-title">Ce que vous développerez</p>
            <div class="prog-modules">
              <div v-for="module in prog.modules" :key="module.title" class="prog-module">
                <span class="module-icon">{{ module.icon }}</span>
                <div>
                  <p class="module-title">{{ module.title }}</p>
                  <p class="module-desc">{{ module.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="prog-body-right">
          <!-- Fiche programme -->
          <div class="prog-card">
            <div class="prog-card-row">
              <span class="card-key">Durée</span>
              <span class="card-val">{{ prog.duration }}</span>
            </div>
            <div class="prog-card-row">
              <span class="card-key">Format</span>
              <span class="card-val">{{ prog.format }}</span>
            </div>
            <div class="prog-card-row">
              <span class="card-key">Taille de cohorte</span>
              <span class="card-val">{{ prog.cohort }}</span>
            </div>
            <!-- <div class="prog-card-row">
              <span class="card-key">Coût</span>
              <span class="card-val">{{ prog.cost }}</span>
            </div> -->
            <div class="prog-card-row">
              <span class="card-key">Prochaine session</span>
              <span class="card-val">{{ prog.nextSession }}</span>
            </div>
            <RouterLink to="/apply" class="btn-primary prog-cta-btn">
              Candidater à ce programme →
            </RouterLink>
          </div>

          <!-- Ce que vous obtenez -->
          <div class="prog-outcomes">
            <p class="prog-block-title">À la fin du programme</p>
            <ul class="prog-list">
              <li v-for="item in prog.outcomes" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeId = ref('')

const programs = [
  { id: 'ideation',    num: '01', icon: '💡', title: 'Ideation'       },
  { id: 'poc-mvp',     num: '02', icon: '🚀', title: 'POC → MVP'      },
  { id: 'acceleration',num: '03', icon: '📈', title: 'Accélération'   },
  { id: 'deep-impact', num: '04', icon: '🔬', title: 'Deep Impact'    },
]

const programDetails = [
  {
    id: 'ideation',
    num: '01',
    icon: '💡',
    category: 'Phase 1 — Idéation',
    title: 'Ideation Lab',
    tags: ['12 semaines', 'Gratuit', 'Cohorte', 'Présentiel Dakar'],
    descLong: "De l'idée brute à l'opportunité structurée. Le programme Ideation est conçu pour les porteurs de projets qui ont identifié un problème mais ont besoin d'un cadre rigoureux pour valider leur vision, tester leurs hypothèses et construire un business model robuste avant d'investir des ressources.",
    duration: '12 semaines intensives',
    format: 'Présentiel + workshops',
    cohort: '100 participants max',
    cost: 'Gratuit (sélection)',
    nextSession: 'Janvier 2025',
    forWho: [
      'Porteurs d\'idées avec un problème clairement identifié',
      'Étudiants en fin de cursus souhaitant entreprendre',
      'Professionnels voulant pivoter vers l\'entrepreneuriat',
      'Projets en phase pré-prototype',
    ],
    modules: [
      { icon: '🎯', title: 'Problem Framing', desc: 'Définition précise du problème, mapping des parties prenantes, analyse du contexte sénégalais.' },
      { icon: '👥', title: 'Customer Discovery', desc: '50 interviews utilisateurs, validation des hypothèses sur le terrain, insights actionnables.' },
      { icon: '📐', title: 'Business Model Canvas', desc: 'Construction du modèle économique, identification des revenus, structure des coûts.' },
      { icon: '🖼️', title: 'Prototype Papier', desc: 'Premier prototype rapide, test d\'usage, feedback loop initial avant tout développement.' },
    ],
    outcomes: [
      'Business Model Canvas validé par le terrain',
      'Deck de présentation investisseurs prêt',
      'Réseau de 20 co-entrepreneurs CXBD',
      'Accès au programme POC → MVP si sélectionné',
      'Certificat CXBD Ideation',
    ],
  },
  {
    id: 'poc-mvp',
    num: '02',
    icon: '🚀',
    category: 'Phase 2 — Construction',
    title: 'POC → MVP',
    tags: ['6 mois', 'Hybride', 'Mentorat intensif', 'Equity-free'],
    descLong: "Du concept au produit réel. Ce programme accompagne les startups en phase précoce qui ont validé leur idée et ont besoin d'un cadre structuré pour construire leur MVP, acquérir leurs premiers clients et définir leur roadmap produit et commerciale.",
    duration: '6 mois',
    format: 'Hybride (3 j/semaine)',
    cohort: '40 startups max',
    cost: 'Equity-free (contribution symbolique)',
    nextSession: 'Février 2025',
    forWho: [
      'Startups post-ideation avec un BMC validé',
      'Équipes de 2 à 4 personnes',
      'Projets avec au moins 1 profil technique',
      'Premières conversations clients engagées',
    ],
    modules: [
      { icon: '🏗️', title: 'Product Development', desc: 'Définition du scope MVP, priorisation features, développement agile en sprints de 2 semaines.' },
      { icon: '📊', title: 'Growth & Traction', desc: 'Acquisition des 100 premiers utilisateurs, métriques de rétention, product-market fit indicators.' },
      { icon: '💰', title: 'Revenue Model', desc: 'Tests de pricing, premier revenu, modèle de monétisation adapté au marché sénégalais.' },
      { icon: '🤝', title: 'Pitch & Fundraising', desc: 'Construction du pitch deck, simulation devant investisseurs CXBD, préparation due diligence.' },
    ],
    outcomes: [
      'MVP fonctionnel déployé et testé',
      '100+ utilisateurs actifs ou clients payants',
      'MRR ou pipeline commercial documenté',
      'Pitch deck investor-ready',
      'Introduction garantie à 3 investisseurs du réseau CXBD',
    ],
  },
  {
    id: 'acceleration',
    num: '03',
    icon: '📈',
    category: 'Phase 3 — Scale',
    title: 'Accélération',
    tags: ['6 mois', 'Investisseurs', 'Marché institutionnel', 'Régional CEDEAO'],
    descLong: "Scale Sénégal et au-delà. L'Accélération est réservée aux startups qui ont prouvé leur modèle et sont prêtes à grandir — marché institutionnel sénégalais, levée de fonds, expansion régionale CEDEAO. Un programme premium avec un accès direct aux décideurs.",
    duration: '6 mois',
    format: 'Premium — résidentiel partiel',
    cohort: '10 startups max',
    cost: 'Participation aux bénéfices (2%)',
    nextSession: 'Mars 2025',
    forWho: [
      'Startups avec un MVP validé et de la traction',
      'MRR > 500 000 CFA ou équivalent impact',
      'Équipe de 3+ personnes à temps plein',
      'Ambition de scale régional',
    ],
    modules: [
      { icon: '🏛️', title: 'Marché institutionnel', desc: 'Stratégie B2G, appels d\'offres publics, partenariats avec ministères et agences sénégalaises.' },
      { icon: '💼', title: 'Levée de fonds', desc: 'Préparation Series A, introduction aux VCs partenaires, négociation term sheets, closing.' },
      { icon: '🌍', title: 'Expansion CEDEAO', desc: 'Stratégie d\'entrée sur les marchés Mali, Côte d\'Ivoire, Ghana — adaptation locale et réseau régional.' },
      { icon: '🏢', title: 'Corporate Partnerships', desc: 'Mise en relation avec les grandes entreprises partenaires du CXBD pour des contrats et des pilotes.' },
    ],
    outcomes: [
      'Levée de fonds réalisée ou en cours de closing',
      'Premier contrat institutionnel signé',
      'Plan d\'expansion régionale documenté',
      'Équipe > 10 personnes',
      'Réseau C-level : 50+ décideurs connectés',
    ],
  },
  {
    id: 'deep-impact',
    num: '04',
    icon: '🔬',
    category: 'Phase 4 — R&D Profond',
    title: 'Deep Impact Track',
    tags: ['12 mois', 'R&D avancé', 'Partenaires tech', 'Impact profond'],
    descLong: "Le programme le plus avancé du CXBD, réservé aux projets technologiques à fort impact systémique : Climate Tech, IA & Data, BioTech, Industrial Tech, Energy Tech. Un accompagnement sur 12 mois avec accès aux laboratoires partenaires et un financement de R&D dédié.",
    duration: '12 mois',
    format: 'R&D + Laboratoires partenaires',
    cohort: '12 projets max',
    cost: 'Co-financement R&D (CXBD apporte 30%)',
    nextSession: 'Dossiers ouverts',
    forWho: [
      'Projets deep tech à fort impact sociétal',
      'Fondateurs avec expertise technique avancée',
      'Travaux de R&D nécessitant un cadre institutionnel',
      'Ambition d\'impact : Climate, Santé, Agriculture, Énergie',
    ],
    modules: [
      { icon: '🧪', title: 'R&D Structuré', desc: 'Accès aux laboratoires UCAD et ESP, protocoles de recherche, propriété intellectuelle et brevets.' },
      { icon: '🤖', title: 'Tech Transfer', desc: 'Partenariats avec centres de recherche internationaux, adaptation technologique au contexte africain.' },
      { icon: '📏', title: 'Impact Measurement', desc: 'Frameworks de mesure d\'impact ODD, reporting ESG, certification impact pour accès aux fonds dédiés.' },
      { icon: '🌐', title: 'Partenariats stratégiques', desc: 'Co-développement avec multinationales partenaires, pilotes gouvernementaux, accès à des financements climat.' },
    ],
    outcomes: [
      'Prototype ou produit certifié déployé',
      'Au moins 1 brevet ou propriété intellectuelle protégée',
      'Rapport d\'impact publié et certifié',
      'Partenariat institutionnel long terme signé',
      'Accès au réseau international de deep tech investors',
    ],
  },
]

function scrollToProgram(id) {
  activeId.value = id
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(async () => {
  await nextTick()
  // Handle URL hash on load
  if (route.hash) {
    const id = route.hash.replace('#', '')
    setTimeout(() => scrollToProgram(id), 300)
  }

  // Track active section on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) activeId.value = e.target.id
      })
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  )
  programs.forEach(p => {
    const el = document.getElementById(p.id)
    if (el) observer.observe(el)
  })
})
</script>

<style scoped>
.programs-page { background: var(--bg); }

/* Hero */
.page-hero { padding-top: 11rem; }
.page-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--text);
  margin-bottom: 1.5rem;
}
.page-sub {
  color: var(--text-sub);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  max-width: 50ch;
}

/* Sticky nav */
.prog-nav {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  position: sticky;
  top: 60px;
  z-index: 50;
  background: var(--bg);
  transition: background 0.3s;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.prog-nav::-webkit-scrollbar { display: none; }

.prog-nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-right: 1px solid var(--border);
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}
.prog-nav-item:last-child { border-right: none; }
.prog-nav-item:hover { color: var(--text); background: var(--bg-alt); }
.prog-nav-item.active { color: var(--text); background: var(--surface); }
.prog-nav-icon { font-size: 1rem; }

/* Programme section */
.prog-section { border-bottom: 1px solid var(--border); }
.prog-section--alt { background: var(--bg-alt); }

.prog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.prog-header-left { display: flex; align-items: flex-start; gap: 1.8rem; }
.prog-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  flex-shrink: 0;
}
.prog-num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--border);
  line-height: 1;
  letter-spacing: -0.05em;
}
.prog-icon { font-size: 1.8rem; line-height: 1; }
.prog-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: var(--text);
}

.meta-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.prog-meta-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: flex-start; }
.meta-pill {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 0.3rem 0.7rem;
  background: var(--surface);
  white-space: nowrap;
}

/* Body 2 col */
.prog-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  align-items: start;
}

.prog-desc-long {
  font-size: 1.05rem;
  color: var(--text-sub);
  font-weight: 300;
  line-height: 1.85;
  margin-bottom: 3rem;
  max-width: 60ch;
}

.prog-block { margin-bottom: 2.5rem; }
.prog-block-title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

/* For who list */
.prog-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.prog-list li {
  font-size: 0.9rem;
  color: var(--text-sub);
  font-weight: 300;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.5;
}
.prog-list li::before {
  content: '→';
  position: absolute; left: 0;
  color: var(--text-muted);
  font-size: 0.78rem;
}

/* Modules grid */
.prog-modules { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); }
.prog-module {
  background: var(--bg);
  padding: 1.4rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: background 0.2s;
}
.prog-section--alt .prog-module { background: var(--bg-alt); }
.prog-module:hover { background: var(--surface); }
.module-icon { font-size: 1.3rem; line-height: 1; flex-shrink: 0; margin-top: 0.1rem; }
.module-title {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.3rem;
  letter-spacing: -0.01em;
}
.module-desc { font-size: 0.8rem; color: var(--text-muted); font-weight: 300; line-height: 1.55; }

/* Right column card */
.prog-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 1.8rem;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.prog-card-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border);
}
.prog-card-row:first-child { padding-top: 0; }
.card-key {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  flex-shrink: 0;
}
.card-val {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text);
  text-align: right;
}
.prog-cta-btn {
  width: 100%;
  text-align: center;
  justify-content: center;
  margin-top: 1.4rem;
  padding: 1rem;
}

.prog-outcomes {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  padding: 1.8rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .prog-body { grid-template-columns: 1fr; gap: 3rem; }
  .prog-body-right { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .prog-card { margin-bottom: 0; }
  .page-hero { padding-top: 9rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .page-hero { padding-top: 7.5rem; }
  .prog-nav { top: 56px; }
  .prog-nav-item { padding: 0.85rem 1.2rem; font-size: 0.72rem; }
  .prog-nav-label { display: none; }
  .prog-nav-icon { font-size: 1.2rem; }
  .prog-nav-item { justify-content: center; width: 60px; }

  .prog-header { flex-direction: column; gap: 1.2rem; }
  .prog-header-left { gap: 1.2rem; }
  .prog-num { font-size: 1.8rem; }
  .prog-icon { font-size: 1.4rem; }

  .prog-body-right { grid-template-columns: 1fr; }
  .prog-modules { grid-template-columns: 1fr; }
  .prog-card { padding: 1.4rem; }
  .prog-outcomes { padding: 1.4rem; }
  .prog-desc-long { font-size: 0.95rem; margin-bottom: 2rem; }
}

/* Small */
@media (max-width: 480px) {
  .prog-nav-item { width: 50px; padding: 0.85rem 0.8rem; }
}
</style>
