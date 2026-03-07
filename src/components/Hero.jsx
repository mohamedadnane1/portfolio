import { personalInfo } from '../data/personalInfo'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Bonjour, je suis</p>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.title}>{personalInfo.title}</p>
        <p className={styles.tagline}>{personalInfo.tagline}</p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.primaryBtn}>
            Voir mes projets
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Me contacter
          </a>
        </div>
      </div>
      {personalInfo.avatarUrl && (
        <div className={styles.avatarWrap}>
          <img src={personalInfo.avatarUrl} alt="" className={styles.avatar} />
        </div>
      )}
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
