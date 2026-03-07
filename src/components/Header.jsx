import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, 'hero')}>
          Portfolio
        </a>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul className={styles.links}>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={onThemeToggle}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
