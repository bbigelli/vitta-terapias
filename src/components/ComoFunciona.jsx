import { CalendarDays, MessageCircle, MapPin, CreditCard } from 'lucide-react'
import styles from './ComoFunciona.module.css'

const steps = [
  {
    icon: MessageCircle,
    title: 'Escolha o serviço',
    description: 'Selecione a massagem ou terapia que melhor atende sua necessidade'
  },
  {
    icon: CalendarDays,
    title: 'Agende pelo WhatsApp',
    description: 'Clique em "Agendar" e confirme data e horário direto no WhatsApp'
  },
  {
    icon: MapPin,
    title: 'Escolha o local',
    description: 'Atendimento em Interlagos (SP) ou na sua casa (consulte disponibilidade)'
  },
  {
    icon: CreditCard,
    title: 'Realize o pagamento',
    description: 'Aceito Pix, cartão de crédito/débito (todas as bandeiras) e dinheiro. Pagamento na hora da sessão'
  }
]

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className={styles.comoFunciona}>
      <div className="container">
        <h2 className={styles.title}>Como funciona</h2>
        <p className={styles.subtitle}>
          Simples, rápido e prático. Em poucos passos você já estará relaxando.
        </p>
        
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepIcon}>
                <step.icon size={32} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
        
        <div className={styles.infoBox}>
          <h3>⏰ Horário de atendimento</h3>
          <p>Segunda a Sexta: 13h às 20h | Sábado: 09h às 15h</p>
          <p>📍 Atendimento em Interlagos (SP) e regiões próximas</p>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona