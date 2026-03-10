// data/index.js — static fallback data, easily replaced by API responses

export const PILLARS = [
  {
    id: 1,
    title: 'Compétences stratégiques',
    desc: 'Développer les compétences entrepreneuriales fondamentales pour construire des business models solides et scalables.'
  },
  {
    id: 2,
    title: 'Impact national',
    desc: 'Structurer des projets à fort impact alignés sur les axes prioritaires du Sénégal émergent.'
  },
  {
    id: 3,
    title: 'Connexion écosystèmes',
    desc: 'Connecter les entrepreneurs aux réseaux locaux et internationaux — investisseurs, partenaires, marchés.'
  },
  {
    id: 4,
    title: 'Bridge innovation',
    desc: "Construire un pont entre l'innovation privée et la vision étatique pour un développement durable et souverain."
  }
]

export const SECTORS = [
  { id: 1, icon: '🌾', name: 'AgriTech',           sub: 'Souveraineté alimentaire'   },
  { id: 2, icon: '📚', name: 'EdTech',              sub: 'Éducation & formation'       },
  { id: 3, icon: '🏥', name: 'HealthTech',          sub: 'Santé & bien-être'           },
  { id: 4, icon: '🏭', name: 'Manufacturing',       sub: 'Transformation industrielle' },
  { id: 5, icon: '⚡', name: 'Climat & Énergie',    sub: 'Transition énergétique'      },
  { id: 6, icon: '🏛️', name: 'GovTech',             sub: 'Digitalisation des services' },
  { id: 7, icon: '💰', name: 'FinTech',             sub: 'Inclusion financière'        },
  { id: 8, icon: '🎨', name: 'Industrie créative',  sub: 'Culture & création'          }
]

export const STEPS = [
  {
    num: '01',
    title: 'Business Design',
    desc: "Validation du problème, construction de la proposition de valeur, modélisation économique et prototypage conceptuel. On part du terrain, pas des tableaux."
  },
  {
    num: '02',
    title: 'Expérimentation rapide',
    desc: "Prototype → POC → MVP. Tests utilisateurs réels, itération data-driven, feedback loops courts. Échouer vite pour réussir mieux."
  },
  {
    num: '03',
    title: 'Structuration stratégique',
    desc: "Gouvernance d'entreprise, structuration financière, préparation à l'investissement, accès marchés institutionnels et expansion régionale."
  }
]

export const PROGRAMS = [
  {
    id: 'ideation',
    num: '01',
    icon: '💡',
    title: 'Ideation',
    desc: "De l'idée brute à l'opportunité structurée. Validation du problème, étude d'impact, construction du business model, prototype fonctionnel.",
    duration: '6 semaines',
    format: 'Cohorte · Gratuit',
    tags: ['6 semaines', 'Gratuit', 'Cohorte', 'En présentiel']
  },
  {
    id: 'poc-mvp',
    num: '02',
    icon: '🚀',
    title: 'POC → MVP',
    desc: "Développement produit, test utilisateurs, traction initiale, roadmap technique et stratégique pour startups en phase précoce avec un premier marché identifié.",
    duration: '3 mois',
    format: 'Hybride · Mentorat',
    tags: ['3 mois', 'Hybride', 'Mentorat intensif', 'Equity-free']
  },
  {
    id: 'acceleration',
    num: '03',
    icon: '📈',
    title: 'Accélération',
    desc: "Scale Sénégal : accès au marché institutionnel, structuration de la levée de fonds, mise en relation investisseurs, expansion régionale CEDEAO.",
    duration: '6 mois',
    format: 'Premium · Investisseurs',
    tags: ['6 mois', 'Investisseurs', 'Marché institutionnel', 'Régional']
  },
  {
    id: 'deep-impact',
    num: '04',
    icon: '🔬',
    title: 'Deep Impact Track',
    desc: "Programme spécialisé pour projets technologiques avancés à fort impact sociétal : Climate Tech, Industrial Tech, IA & Data, Biotech, Energy Tech.",
    duration: '12 mois',
    format: 'R&D · Partenaires',
    tags: ['12 mois', 'R&D avancé', 'Partenaires tech', 'Impact profond']
  }
]

export const ECO_NODES = [
  { id: 1, icon: '👤', label: 'Entrepreneurs sénégalais', desc: 'Porteurs de projets innovants à impact national' },
  { id: 2, icon: '🏛️', label: 'Institutions publiques',  desc: 'Ministères, agences nationales, collectivités locales' },
  { id: 3, icon: '🏢', label: 'Grandes entreprises',     desc: 'Partenaires corporate et sponsors stratégiques' },
  { id: 4, icon: '💼', label: 'Investisseurs',           desc: 'VCs locaux et internationaux, business angels' },
  { id: 5, icon: '✈️', label: 'Diaspora sénégalaise',    desc: 'Réseau mondial de compétences et de capitaux' },
  { id: 6, icon: '🎓', label: 'Universités & recherche', desc: 'UCAD, ESP, centres R&D et laboratoires partenaires' }
]

export const STATS = [
  { num: 500,  suffix: '+',  label: 'Startups accompagnées'         },
  { num: 5000, suffix: '+',  label: 'Entrepreneurs formés'          },
  { num: 2000, suffix: '+',  label: 'Emplois créés'                 },
  { num: 50,   suffix: '',   label: 'Projets stratégiques nationaux' },
  { num: 30,   suffix: '%',  label: 'Femmes fondatrices'            },
  { num: 100,  suffix: '+',  label: 'Partenariats activés'          }
]

export const GOV_LEVELS = [
  { num: '01', title: "Conseil d'Administration", desc: 'Supervision stratégique et orientations fondamentales de long terme.' },
  { num: '02', title: 'Advisory Board',           desc: 'Orientation internationale, expertise sectorielle globale et ouverture.' },
  { num: '03', title: 'Investment Committee',     desc: "Gestion du fonds d'amorçage et validation des décisions d'investissement." },
  { num: '04', title: 'Direction Exécutive',      desc: 'Opérations quotidiennes, gestion des programmes et des partenariats.' }
]

export const MODEL_TAGS = [
  'Association loi 1901',
  'Partenariats publics',
  'Sponsors corporates',
  'Programmes premium',
  "Fonds d'amorçage",
  'Impact investing'
]
