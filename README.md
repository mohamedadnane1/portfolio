# Portfolio Développeur

Portfolio personnel professionnel, responsive et moderne (React + Vite).

## Hébergement sur Git (GitHub)

Le projet est déjà versionné avec Git. Pour le pousser sur GitHub :

1. Créez un nouveau dépôt sur [GitHub](https://github.com/new) (sans initialiser avec un README).
2. Puis exécutez dans le dossier du projet :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

Remplacez `VOTRE-USERNAME` et `VOTRE-REPO` par votre compte et le nom du dépôt.

## Mettre le portfolio en ligne (tout le monde peut le voir)

Le projet est configuré pour **GitHub Pages** : à chaque push sur `main`, le site est construit et publié.

### Étapes

1. **Créer un dépôt sur GitHub**  
   Allez sur [github.com/new](https://github.com/new), nom du dépôt : **`portfolio`** (sans README).

2. **Pousser le code** (si pas déjà fait) :
   ```bash
   git remote add origin https://github.com/mohamedadnane1/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Activer GitHub Pages**  
   Dans le dépôt : **Settings** → **Pages** → **Source** : choisir **"GitHub Actions"**.

4. **Attendre le déploiement**  
   Après le premier push, l’onglet **Actions** exécute le workflow. Quand c’est vert, le site est en ligne.

5. **Lien public**  
   Le portfolio sera accessible à l’adresse :  
   **https://mohamedadnane1.github.io/portfolio/**

Tu peux partager ce lien (CV, LinkedIn, candidatures). Chaque nouveau push sur `main` met le site à jour automatiquement.

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
