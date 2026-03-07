import { personalInfo } from '../data/personalInfo'
import { oldPortfolioDocs } from '../data/projects'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>À propos</h2>
        <p className={styles.subtitle}>Qui je suis et ce que je recherche</p>
        <div className={styles.content}>
          <p className={styles.bio}>{personalInfo.shortBio}</p>
          <div className={styles.meta}>
            {personalInfo.location && (
              <span className={styles.metaItem}>📍 {personalInfo.location}</span>
            )}
            {personalInfo.cvUrl && (
              <a href={personalInfo.cvUrl} className={styles.cvLink} target="_blank" rel="noopener noreferrer">
                Télécharger mon CV
              </a>
            )}
          </div>
          {oldPortfolioDocs && oldPortfolioDocs.length > 0 && (
            <div className={styles.docs}>
              <h3 className={styles.docsTitle}>Documents (ancien portfolio)</h3>
              <ul className={styles.docsList}>
                {oldPortfolioDocs.map((doc, i) => (
                  <li key={i}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className={styles.docLink}>
                      📄 {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
