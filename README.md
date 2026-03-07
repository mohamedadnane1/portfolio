# Portfolio Développeur

Portfolio personnel professionnel, responsive et moderne (React + Vite).

## Démarrage

```bash
cd portfolio
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Build production

```bash
npm run build
npm run preview
```

Les fichiers générés sont dans `dist/` (à déployer sur Vercel, Netlify, GitHub Pages, etc.).

## Structure du projet

```
portfolio/
├── public/           # Assets statiques (favicon, images projets)
│   └── projects/     # Captures d’écran des projets (à créer)
├── src/
│   ├── components/   # Composants React (Header, Hero, Projects, etc.)
│   ├── data/         # Données à personnaliser
│   │   ├── personalInfo.js  # Nom, titre, contact, liens
│   │   ├── skills.js        # Compétences
│   │   ├── experience.js    # Parcours / expériences
│   │   └── projects.js      # Liste des projets
│   └── styles/       # CSS global
├── GUIDE_PROJETS.md  # Comment ajouter vos projets (GitHub + locaux)
└── README.md
```

## Personnalisation

- **Identité & contact** : `src/data/personalInfo.js`
- **Compétences** : `src/data/skills.js`
- **Parcours** : `src/data/experience.js`
- **Projets** : `src/data/projects.js` (voir **GUIDE_PROJETS.md** pour le détail)

## Fonctionnalités

- Design sobre et professionnel, mode clair/sombre
- Responsive (mobile, tablette, desktop)
- Section projets avec cartes et modal détail
- Support projets GitHub et projets locaux/privés
- Données centralisées et faciles à modifier
