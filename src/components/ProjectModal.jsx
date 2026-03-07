import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

const STATUS_LABELS = {
  github: 'Sur GitHub',
  local: 'Projet local',
  private: 'Projet privé',
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  const {
    title,
    description,
    context,
    technologies,
    features,
    images,
    explication,
    githubUrl,
    demoUrl,
    reports,
    status,
    date,
  } = project

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={`${styles.badge} ${styles[status]}`}>
              {STATUS_LABELS[status]}
            </span>
            {date && <span className={styles.date}>{date}</span>}
          </div>
          <h2 id="modal-title" className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          {context && (
            <div className={styles.block}>
              <h4>Contexte</h4>
              <p>{context}</p>
            </div>
          )}
          {technologies && technologies.length > 0 && (
            <div className={styles.block}>
              <h4>Stack technique</h4>
              <div className={styles.techs}>
                {technologies.map((t) => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>
            </div>
          )}
          {features && features.length > 0 && (
            <div className={styles.block}>
              <h4>Fonctionnalités</h4>
              <ul className={styles.features}>
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          {explication && (
            <div className={styles.block}>
              <h4>Présentation</h4>
              <p className={styles.explication}>{explication}</p>
            </div>
          )}
          {images && images.length > 0 && (
            <div className={styles.block}>
              <h4>Captures</h4>
              <div className={styles.gallery}>
                {images.map((src, i) => {
                const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '')
                const resolvedSrc = src.startsWith('http') ? src : base + (src.startsWith('/') ? src : '/' + src)
                return <img key={i} src={resolvedSrc} alt={`Capture ${i + 1}`} className={styles.galleryImg} />
              })}
              </div>
            </div>
          )}
          {reports && reports.length > 0 && (
            <div className={styles.block}>
              <h4>Rapports / Documents</h4>
              <ul className={styles.reports}>
                {reports.map((r, i) => (
                  <li key={i}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className={styles.reportLink}>
                      📄 {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.actions}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Voir sur GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Voir la démo
              </a>
            )}
            {!githubUrl && !demoUrl && status !== 'github' && !explication && (
              <span className={styles.noLink}>Projet sans lien public</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
