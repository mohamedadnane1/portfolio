import { personalInfo } from '../data/personalInfo'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Disponible pour des opportunités en alternance, CDI ou missions</p>
        <div className={styles.content}>
          <a href={`mailto:${personalInfo.email}`} className={styles.link}>
            {personalInfo.email}
          </a>
          {personalInfo.phone && (
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className={styles.link}>
              {personalInfo.phone}
            </a>
          )}
          <div className={styles.social}>
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
