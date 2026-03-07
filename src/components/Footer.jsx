import { personalInfo } from '../data/personalInfo'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>{personalInfo.name}</p>
        <p className={styles.copyright}>
          © {year} — Portfolio. Tous droits réservés.
        </p>
        <div className={styles.links}>
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </div>
      </div>
    </footer>
  )
}
