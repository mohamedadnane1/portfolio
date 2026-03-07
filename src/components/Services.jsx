import { services } from '../data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Ce que je sais faire</h2>
        <p className={styles.subtitle}>Domaines et types de missions</p>
        <div className={styles.grid}>
          {services.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
