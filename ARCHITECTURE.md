# Architecture du portfolio

## Stack technique

| Techno | Rôle |
|--------|------|
| **React 18** | Interface composants |
| **Vite 5** | Build et dev server |
| **CSS Modules** | Styles par composant, pas de lib UI |

Choix :
- **Léger** : pas de Tailwind ni de lib lourde, CSS vanilla + variables.
- **Maintenable** : données dans `src/data/`, composants réutilisables.
- **Crédible** : stack moderne attendue pour un profil développeur.

## Structure des dossiers

```
src/
├── components/       # Composants React
│   ├── Header.jsx    # Nav + menu mobile + thème
│   ├── Hero.jsx      # Accroche + CTAs
│   ├── About.jsx     # Présentation
│   ├── Skills.jsx    # Compétences par catégorie
│   ├── Services.jsx  # Ce que je sais faire
│   ├── Projects.jsx  # Grille projets
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/             # Données (à personnaliser)
│   ├── personalInfo.js
│   ├── skills.js
│   ├── services.js
│   ├── experience.js
│   └── projects.js
├── styles/
│   └── index.css     # Variables CSS, reset, globaux
├── App.jsx
└── main.jsx
```

## Flux des données

- **personalInfo** : Hero, About, Contact, Footer.
- **skills** : Skills.
- **services** : Services.
- **experience** : Experience (timeline).
- **projects** : Projects → ProjectCard + ProjectModal.

Ajouter ou modifier un projet = éditer uniquement `src/data/projects.js` (voir `GUIDE_PROJETS.md`).

## Responsive

- **Desktop** : grilles en `auto-fill` / `auto-fit`, max-width 1200px.
- **Mobile** : menu burger, nav en drawer, grille projets en 1 colonne.
- **Touch** : zones cliquables suffisantes, pas de hover obligatoire.

## Thème (clair / sombre)

- Variable `data-theme` sur `<html>` : `dark` (défaut) ou `light`.
- Préférence stockée dans `localStorage` et respect de `prefers-color-scheme` au premier chargement.
- Toutes les couleurs passent par des variables CSS dans `src/styles/index.css`.
