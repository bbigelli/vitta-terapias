import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Qual a duração de cada sessão?',
    answer: 'As sessões variam entre 30 e 90 minutos, dependendo do serviço escolhido. Massagens relaxantes geralmente duram 60 minutos, enquanto ventosaterapia dura cerca de 40 minutos.'
  },
  {
    question: 'Preciso levar algum material?',
    answer: 'Não é necessário levar nada. Disponibilizamos toalhas, lençóis descartáveis e os produtos utilizados nas massagens (óleos essenciais, cremes, etc.).'
  },
  {
    question: 'Atende homens e mulheres?',
    answer: 'Sim, atendo ambos os sexos. Garantimos um ambiente profissional, seguro e respeitoso para todos os pacientes.'
  },
  {
    question: 'Existe contra-indicação para massagem?',
    answer: 'Sim, massagens não são recomendadas em casos de febre, trombose, infecções agudas, varizes graves, ou após cirurgias recentes sem liberação médica. A avaliação inicial esclarece essas questões.'
  },
  {
    question: 'Qual a forma de pagamento?',
    answer: 'Aceitamos Pix, cartões de crédito/débito (todas as bandeiras) e dinheiro. Atendimento particular, não aceito convênios ainda.'
  },
  {
    question: 'Como funciona o atendimento domiciliar?',
    answer: 'Atendo em domicílio na região de Interlagos e arredores. É cobrada uma taxa adicional de deslocamento, que varia conforme a distância. Você escolhe o serviço e eu vou até você com toda a estrutura necessária.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <h2 className={styles.title}>Perguntas frequentes</h2>
        <p className={styles.subtitle}>
          Tire suas dúvidas sobre os serviços, agendamento e atendimento
        </p>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ