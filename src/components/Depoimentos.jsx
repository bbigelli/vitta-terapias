import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import styles from './Depoimentos.module.css'

const depoimentos = [
  {
    id: 1,
    nome: 'Matheus Quaresma',
    foto: '/imagens/cliente-1.jpg',
    texto: 'Bia, sou super grato, pelo seu cuidado e pelo trabalho que tem feito. Eu te procurei porque tinha enxaquecas muito intensas por excesso de tensão, e isso já estava afetando meu dia a dia de verdade. Desde a primeira sessão, você compreendeu minha necessidade, me avaliou com atenção e foi me explicando com clareza as alterações que encontrava. Essa combinação de técnica, escuta e responsabilidade me passou muita confiança no processo.Com o tratamento, meu nível de estresse caiu muito (a ponto de meus colegas de trabalho perceberem) e, principalmente, minhas crises de enxaqueca cessaram. Isso mudou minha rotina e meu bem-estar de um jeito difícil de medir. Valeu mesmo por toda a dedicação. Recomendo com convicção os seus serviços.',
    nota: 5,
    servico: 'Liberação Miofascial e Ventosaterapia'
  },
  {
    id: 2,
    nome: 'Bruno Oliveira',
    foto: '/imagens/cliente-2.jpg',
    texto: 'Estava com dores lombares há anos e a sessão de massagem me ajudou muito e relaxou demais. Sai da sessão me sentindo bem mais leve. A Bia é super atenciosa, explica tudo direitinho e tem um cuidado incrível. Recomendo para todo mundo que quer cuidar do corpo e aliviar tensões.',
    nota: 5,
    servico: 'Massagem Relaxante Corpo Todo e Ventosaterapia'
  },
]

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextDepoimento = () => {
    if (currentIndex < depoimentos.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevDepoimento = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(depoimentos.length - 1)
    }
  }

  const current = depoimentos[currentIndex]

  return (
    <section id="depoimentos" className={styles.depoimentos}>
      <div className="container">
        <h2 className={styles.title}>O que nossos clientes dizem</h2>
        <p className={styles.subtitle}>Depoimentos de quem já experimentou nossos serviços</p>
        
        <div className={styles.carousel}>
          <button onClick={prevDepoimento} className={styles.navButton}>
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.testimonial}>
            <Quote size={48} className={styles.quote} />
            <div className={styles.stars}>
              {[...Array(current.nota)].map((_, i) => (
                <Star key={i} size={20} fill="#f5c6a0" color="#f5c6a0" />
              ))}
            </div>
            <p className={styles.text}>"{current.texto}"</p>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <strong>{current.nome}</strong>
                <span>{current.servico}</span>
              </div>
            </div>
          </div>
          
          <button onClick={nextDepoimento} className={styles.navButton}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className={styles.dots}>
          {depoimentos.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos