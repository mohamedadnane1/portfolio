import { skills } from '../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Compétences</h2>
        <p className={styles.subtitle}>Technologies et outils que j’utilise</p>
        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div key={group.category} className={styles.card} style={{ animationDelay: `${i * 0.05}s` }}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className={styles.tag}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
