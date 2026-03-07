import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Projets</h2>
        <p className={styles.subtitle}>Réalisations web, logiciels et data</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelected}
            />
          ))}
        </div>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  )
}
