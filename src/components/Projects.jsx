import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

const STATUS_OPTIONS = [
  { value: 'all', label: 'Tous' },
  { value: 'github', label: 'GitHub' },
  { value: 'local', label: 'Projet local' },
]

function getUniqueTechnologies() {
  const set = new Set()
  projects.forEach((p) => p.technologies?.forEach((t) => set.add(t)))
  return Array.from(set).sort()
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [techFilter, setTechFilter] = useState('')

  const technologies = useMemo(getUniqueTechnologies, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchStatus =
        statusFilter === 'all' || project.status === statusFilter
      const matchTech =
        !techFilter ||
        (project.technologies && project.technologies.includes(techFilter))
      return matchStatus && matchTech
    })
  }, [statusFilter, techFilter])

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Projets</h2>
        <p className={styles.subtitle}>Réalisations web, logiciels et data</p>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Statut</span>
            <div className={styles.statusPills}>
              {STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`${styles.pill} ${statusFilter === opt.value ? styles.pillActive : ''}`}
                  onClick={() => setStatusFilter(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="tech-filter" className={styles.filterLabel}>
              Technologie
            </label>
            <select
              id="tech-filter"
              className={styles.select}
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
            >
              <option value="">Toutes</option>
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className={styles.count}>
          {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
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
