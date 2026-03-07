# Comment ajouter vos projets au portfolio

Ce guide explique comment renseigner vos **projets GitHub** et vos **projets locaux / privés** dans le portfolio.

---

## Fichier à modifier

Tous les projets sont définis dans **`src/data/projects.js`**.

---

## Structure d’un projet

Chaque projet est un objet avec les champs suivants :

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | string | Oui | Identifiant unique (ex: `mon-app-react`) |
| `title` | string | Oui | Nom du projet |
| `description` | string | Oui | Courte description (2–3 lignes) |
| `context` | string | Non | Contexte (projet perso, stage, école, client…) |
| `technologies` | string[] | Oui | Liste des technologies (ex: `['React', 'Node.js']`) |
| `features` | string[] | Non | Fonctionnalités principales |
| `images` | string[] | Non | Chemins vers les images (dans `public/`) |
| `githubUrl` | string \| null | Non | Lien vers le dépôt GitHub, ou `null` |
| `demoUrl` | string \| null | Non | Lien vers la démo en ligne, ou `null` |
| `status` | string | Oui | `'github'` \| `'local'` \| `'private'` |
| `date` | string | Non | Année ou date (ex: `"2024"`) |

---

## Exemple : projet sur GitHub

```javascript
{
  id: 'todo-app',
  title: 'Application Todo Full Stack',
  description: 'Application de gestion de tâches avec authentification et API REST.',
  context: 'Projet personnel pour apprendre React et Node.js.',
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  features: ['CRUD tâches', 'Auth JWT', 'Filtres et recherche'],
  images: ['/projects/todo-1.jpg', '/projects/todo-2.jpg'],
  githubUrl: 'https://github.com/votre-username/todo-app',
  demoUrl: 'https://todo-demo.vercel.app',
  status: 'github',
  date: '2024',
}
```

- Mettez les captures dans **`public/projects/`** (ex: `public/projects/todo-1.jpg`).
- Dans `images`, utilisez des chemins qui commencent par `/` : `'/projects/todo-1.jpg'`.

---

## Exemple : projet local / privé (sans GitHub)

```javascript
{
  id: 'outil-interne',
  title: 'Outil de reporting interne',
  description: 'Scripts et tableaux de bord pour le reporting équipe.',
  context: 'Projet réalisé en stage, code propriétaire.',
  technologies: ['Python', 'Pandas', 'SQL', 'Streamlit'],
  features: ['Import CSV', 'Graphiques', 'Export PDF'],
  images: ['/projects/report-1.jpg'],
  githubUrl: null,
  demoUrl: null,
  status: 'local',
  date: '2024',
}
```

- `status: 'local'` ou `'private'` affichera un badge **Projet local** / **Projet privé**.
- Pas de lien GitHub ni démo : le modal affichera uniquement description, stack, fonctionnalités et images.

---

## Récapitulatif `status`

- **`github`** : projet avec dépôt public → renseignez `githubUrl`, optionnellement `demoUrl`.
- **`local`** : projet sur votre PC, pas sur GitHub → pas de lien, présentation par texte + images.
- **`private`** : même usage que `local`, pour projets confidentiels.

---

## Où mettre les images

1. Créez le dossier **`public/projects/`** si besoin.
2. Ajoutez vos captures (jpg, png, webp).
3. Dans `images`, indiquez les chemins : `['/projects/nom-fichier.jpg']`.

---

## Liste à me donner plus tard

Quand vous serez prêt, vous pourrez me donner :

1. **Projets GitHub** : pour chaque projet, nom, description, contexte, technos, lien repo, lien démo si dispo, et éventuellement chemins d’images.
2. **Projets locaux** : pour chaque projet, nom, description, contexte, technos, fonctionnalités, et chemins des captures (que vous aurez placées dans `public/projects/`).

Je pourrai alors vous proposer le contenu exact à coller dans `src/data/projects.js` (ou le faire pour vous si vous préférez).
