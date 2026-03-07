import { experience } from '../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Parcours</h2>
        <p className={styles.subtitle}>Formation et expériences</p>
        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <h3 className={styles.role}>{item.title}</h3>
                <p className={styles.place}>{item.place}</p>
                <p className={styles.period}>{item.period}</p>
                {item.description && (
                  <p className={styles.desc}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
