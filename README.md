# CXBD – Centre Expérimental en Business Design

> Incubateur stratégique pour entrepreneurs sénégalais alignés avec les priorités nationales

## Stack technique

- **Vue 3** (Composition API + `<script setup>`)
- **Vite 5** — bundler ultra-rapide
- **Vue Router 4** — navigation SPA
- **Pinia** — state management (prêt pour backend)
- **VueUse** — composables utilitaires

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Structure du projet

```
src/
├── assets/         # CSS global (variables, utilitaires, animations)
├── components/     # Composants UI réutilisables
│   ├── AppNav.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   ├── VisionSection.vue
│   ├── SectorsSection.vue
│   ├── MethodSection.vue
│   ├── ProgramsSection.vue
│   ├── EcosystemSection.vue
│   ├── ImpactSection.vue
│   ├── GovernanceSection.vue
│   └── CtaFinal.vue
├── composables/    # Logique réutilisable
│   ├── useReveal.js    # Scroll animations
│   └── useCounter.js   # Animated counters
├── data/           # Données statiques (fallback)
│   └── index.js
├── router/         # Configuration des routes
│   └── index.js
├── services/       # Couche API (prêt pour backend)
│   └── api.js
├── stores/         # Pinia stores
│   └── cxbd.js
└── views/
    ├── HomeView.vue
    ├── ProgramsView.vue
    ├── ApplyView.vue
    └── AboutView.vue
```

## Connexion au backend

### 1. Variables d'environnement

Créer `.env.local` :
```
VITE_API_URL=http://localhost:3000/api
```

### 2. Services API (`src/services/api.js`)

Tous les endpoints sont déjà définis :
```js
programsApi.getAll()           // GET /api/programs
applicationsApi.submit(data)   // POST /api/applications
statsApi.getImpact()           // GET /api/stats/impact
contactApi.send(data)          // POST /api/contact
```

### 3. Store Pinia (`src/stores/cxbd.js`)

Le store utilise les données statiques comme fallback.
Appeler `fetchPrograms()` et `fetchStats()` dans le composant racine quand le backend est prêt.

### 4. Authentification

Ajouter le token dans `localStorage` avec la clé `cxbd_token` — le service API l'inclut automatiquement dans les headers.

## Backend suggéré

- **Node.js / Express** ou **NestJS**
- **PostgreSQL** ou **MongoDB**
- Endpoints REST : `/api/programs`, `/api/applications`, `/api/stats`, `/api/contact`

## Build production

```bash
npm run build
# Output dans /dist
```

## Déploiement

Compatible Vercel, Netlify, VPS (avec Nginx).

---

*CXBD — Design. Experiment. Transform.*
