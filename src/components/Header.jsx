import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <img 
              src="/imagens/logo.png" 
              alt="Vitta Terapias Logo" 
              className={styles.logoImage} 
            />
        <div className={styles.logoTextContainer}>
          <span className={styles.logoText}>Vitta Terapias</span>
          <span className={styles.logoSub}>Massagens Terapêuticas</span>
        </div>
      </div>

          <nav className={styles.desktopMenu}>
            {navItems.map(item => (
              <a key={item.name} href={item.href} className={styles.navLink}>
                {item.name}
              </a>
            ))}
          </nav>

          <button 
            className={styles.mobileButton} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className={styles.mobileMenu}>
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header