import { personalInfo } from '../data/personalInfo'
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
        </div>
      </div>
    </section>
  )
}
