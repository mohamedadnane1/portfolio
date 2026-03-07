import styles from './ProjectCard.module.css'

const STATUS_LABELS = {
  github: 'GitHub',
  local: 'Projet local',
  private: 'Projet privé',
}

export default function ProjectCard({ project, onClick }) {
  const { title, description, technologies, status, images } = project
  const hasImage = images && images.length > 0

  return (
    <article
      className={styles.card}
      onClick={() => onClick(project)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      role="button"
      tabIndex={0}
    >
      <div className={styles.media}>
        {hasImage ? (
          <img src={images[0]} alt="" className={styles.img} />
        ) : (
          <div className={styles.placeholder}>
            <span>{title.charAt(0)}</span>
          </div>
        )}
        <span className={`${styles.badge} ${styles[status]}`}>
          {STATUS_LABELS[status] || status}
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.techs}>
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
      <span className={styles.linkHint}>Voir le détail →</span>
    </article>
  )
}
