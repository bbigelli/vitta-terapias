import { Phone, Sparkles, Heart, Shield } from 'lucide-react'
import styles from './Hero.module.css'

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511942772083?text=Olá! Gostaria de agendar uma sessão de massagem terapêutica.', '_blank')
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Atendimento humanizado</span>
            </div>
            <h1 className={styles.title}>
              Cuide do seu corpo <br />
              <span className={styles.highlight}>e da sua mente</span>
            </h1>
            <p className={styles.subtitle}>
              Massagens terapêuticas com atendimento personalizado, 
              ambiente acolhedor e profissional especializada.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <Heart size={20} />
                <span>Atendimento humanizado</span>
              </div>
              <div className={styles.feature}>
                <Shield size={20} />
                <span>Ambiente seguro e higienizado</span>
              </div>
            </div>

            <button onClick={handleWhatsApp} className={styles.whatsappButton}>
              <Phone size={18} /> 
              Agendar pelo WhatsApp
            </button>
          </div>
          
          <div className={styles.image}>
            <div className={styles.imageWrapper}>
              <img 
                src="/imagens/local.png" 
                alt="Ambiente de massagem terapêutica"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero