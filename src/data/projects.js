/**
 * Liste des projets du portfolio
 *
 * Chaque projet peut être :
 * - Sur GitHub (status: 'github') : renseignez githubUrl
 * - Local / privé (status: 'local') : pas de lien GitHub, affiche "Projet local"
 *
 * Champs :
 * - id : unique (slug)
 * - title : nom du projet
 * - description : courte description
 * - context : contexte (projet perso, école, stage, etc.)
 * - technologies : tableau de technologies
 * - features : liste des fonctionnalités principales
 * - images : chemins vers images (dans public/, ex: /projects/mon-projet-1.jpg)
 * - githubUrl : lien GitHub ou null
 * - demoUrl : lien démo ou null
 * - status : 'github' | 'local' | 'private'
 * - date : année ou date (ex: "2024")
 *
 * Pour ajouter vos vrais projets plus tard, dupliquez un bloc et remplissez les champs.
 */
export const projects = [
  {
    id: 'placeholder-1',
    title: 'Projet à venir (GitHub)',
    description: 'Exemple de projet avec dépôt GitHub. Remplacez par votre vrai projet.',
    context: 'Projet personnel ou scolaire.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Fonctionnalité 1', 'Fonctionnalité 2', 'API REST'],
    images: [], // ex: ['/projects/projet1-1.jpg', '/projects/projet1-2.jpg']
    githubUrl: 'https://github.com',
    demoUrl: null,
    status: 'github',
    date: '2024',
  },
  {
    id: 'placeholder-2',
    title: 'Projet local / privé',
    description: 'Exemple de projet sans GitHub : démo, stage, ou projet confidentiel.',
    context: 'Projet local ou entreprise.',
    technologies: ['Python', 'SQL', 'Data'],
    features: ['Traitement de données', 'Rapports', 'Scripts'],
    images: [],
    githubUrl: null,
    demoUrl: null,
    status: 'local',
    date: '2024',
  },
]
