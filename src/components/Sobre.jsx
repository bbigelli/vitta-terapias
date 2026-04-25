import { Award, Users, Clock, ThumbsUp } from 'lucide-react'
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
              alt="Profissional de massagem terapêutica"
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.subtitle}>
              Mais de 2 anos cuidando do bem-estar e da saúde dos meus pacientes
            </h3>
            <p className={styles.text}>
              Sou especialista em massoterapia, com formação em técnicas 
              integrativas e abordagem humanizada. Acredito que cada corpo é único e 
              merece um cuidado personalizado.
            </p>
            <p className={styles.text}>
              Minha missão é ajudar você a encontrar equilíbrio, aliviar dores e 
              promover qualidade de vida através de técnicas manuais e acolhimento.
            </p>
            <p className={styles.text}>
              O objetivo não é só aliviar por algumas horas, mas promover bem-estar real, qualidade de vida e mais consciência comporal.
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
            <Clock size={24} />
            <h4>Horário flexível</h4>
            <p>Atendimento de segunda a sábado, com horários especiais</p>
          </div>
          <div className={styles.qualityCard}>
            <Award size={24} />
            <h4>Certificações</h4>
            <p>Formada nas melhores técnicas nacionais e internacionais</p>
          </div>
          <div className={styles.qualityCard}>
            <Users size={24} />
            <h4>Atendimento humanizado</h4>
            <p>Escuta ativa e tratamento personalizado para cada paciente</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre