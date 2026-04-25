import React from 'react'
import { Award, Users, ThumbsUp } from 'lucide-react'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className="container">
        <h2 className={styles.title}>Sobre mim</h2>
        
        <div className={styles.container}>
          <div className={styles.image}>
            <img 
              src="/imagens/profissional.png" 
              alt="Profissional de massagem e fisioterapia"
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.subtitle}>
              Mais de 2 anos cuidando do seu bem-estar com dedicação e carinho
            </h3>
            <p className={styles.text}>
              Sou especialista em massoterapia, com formação em técnicas integrativas e abordagem humanizada. 
              Acredito que cada corpo é único e merece um cuidado personalizado.
            </p>
            <p className={styles.text}>
              Minha missão é ajudar você a encontrar equilíbrio, aliviar dores e promover 
              qualidade de vida através de técnicas manuais e acolhimento.
            </p>
            <p className={styles.text}>
              O objetivo não é apenas aliviar por algumas horas, mas promover bem-estar, 
              qualidade de vida e mais consciência para o seu dia a dia.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <Award size={32} />
                <div>
                  <h4>2+ anos</h4>
                  <p>de experiência</p>
                </div>
              </div>
              <div className={styles.stat}>
                <Users size={32} />
                <div>
                  <h4>50+</h4>
                  <p>pacientes atendidos</p>
                </div>
              </div>
              <div className={styles.stat}>
                <ThumbsUp size={32} />
                <div>
                  <h4>100%</h4>
                  <p>de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.qualities}>
          <div className={styles.qualityCard}>
            <Award size={24} />
            <h4>Formação especializada</h4>
            <p>Formada em técnicas integrativas e massoterapia</p>
          </div>
          <div className={styles.qualityCard}>
            <Users size={24} />
            <h4>Atendimento humanizado</h4>
            <p>Escuta ativa e tratamento personalizado</p>
          </div>
          <div className={styles.qualityCard}>
            <ThumbsUp size={24} />
            <h4>Resultados duradouros</h4>
            <p>Bem-estar que vai além da sessão</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre