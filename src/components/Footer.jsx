import { Heart, Instagram, Phone } from 'lucide-react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.brand}>
            <h3>Vitta Terapias</h3>
            <p>Massagens Terapêutica</p>
            <p className={styles.tagline}>Cuidando do seu bem-estar com carinho e profissionalismo</p>
          </div>
          
          <div className={styles.links}>
            <h4>Links rápidos</h4>
            <a href="#">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#serviços">Serviços</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#contato">Contato</a>
          </div>
          
          <div className={styles.contato}>
            <h4>Contato</h4>
            <p><Phone size={16} /> (11) 94277-2083</p>
          </div>
          
          <div className={styles.social}>
            <h4>Redes sociais</h4>
            <a href="https://www.instagram.com/_vitta.terapias/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} /> Instagram
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Vitta Terapias - Todos os direitos reservados
          </p>

          <div className={styles.developerCard}>
            <div className={styles.developerInfo}>
              <strong>Desenvolvido por Bruno Bigelli</strong>
              <div className={styles.developerLinks}>
                <a 
                  href="https://www.linkedin.com/in/brunobigelli/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.devLink}
                >
                  💼 LinkedIn
                </a>
                <a 
                  href="https://github.com/bbigelli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.devLink}
                >
                  📂 GitHub
                </a>
                <a 
                  href="https://wa.me/5511952302900?text=Olá! Gostei do site da Vitta Terapias e quero um orçamento para o meu negócio." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.devLink}
                >
                  📱 Orçamento
                </a>
              </div>
            </div>
          </div>

          
          <p className={styles.heart}>
            Feito com <Heart size={16} color="#e74c3c" /> para o seu bem-estar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer