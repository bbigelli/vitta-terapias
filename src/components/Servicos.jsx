import { useState } from 'react'
import { Clock, Phone, ChevronRight } from 'lucide-react'
import styles from './Servicos.module.css'

const servicosLista = [
  {
    id: 1,
    nome: 'Massagem Relaxante Corpo Todo',
    descricao: 'Alivia tensões musculares, reduz o estresse e promove bem-estar profundo. Ideal para quem busca relaxamento completo.',
    duracao: '60 min',
    preco: 'R$ 220,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/massagem_relaxante.png',
    destaque: true
  },
  {
    id: 2,
    nome: 'Massagem Facial',
    descricao: 'A massagem facial é uma técnica manual que combina movimentos suaves, precisos e estimulantes para promover benefícios estéticos e terapêuticos para a pele do rosto.',
    duracao: '30 min',
    preco: 'R$ 60,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/massagem_facial.png',
    destaque: false
  },
  {
    id: 3,
    nome: 'Liberação Miofascial Corpo Todo',
    descricao: 'Técnica para aliviar dores musculares crônicas, melhorar a mobilidade e liberar tensões profundas.',
    duracao: '90 min',
    preco: 'R$ 260,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/liberacao_miofascial.png',
    destaque: false
  },
  {
    id: 4,
    nome: 'Drenagem Linfática',
    descricao: 'Reduz inchaços, melhora a circulação sanguínea e auxilia no pós-operatório.',
    duracao: '45 min',
    preco: 'R$ 180,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/drenagem_linfatica.png',
    destaque: false
  },
  {
    id: 5,
    nome: 'Ventosaterapia',
    descricao: 'Técnica milenar chinesa que ajuda na circulação sanguínea, alívio de dores e desintoxicação.',
    duracao: '40 min',
    preco: 'R$ 80,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/ventosaterapia.png',
    destaque: true
  },
  {
    id: 6,
    nome: 'Massagem Localizada',
    descricao: 'Massagem focada em áreas específicas do corpo para alívio de dores e tensões musculares.',
    duracao: '30 min',
    preco: 'R$ 90,00',
    domilicio: '*Consulte valores para atendimento domiciliar',
    imagem: '/imagens/massagem_localizada.png',
    destaque: true
  }
]

const Servicos = () => {
  const [filter, setFilter] = useState('todos')
  
  const filteredServicos = filter === 'todos' 
    ? servicosLista 
    : servicosLista.filter(s => s.destaque)

  const agendarWhatsApp = (servico) => {
    const msg = `Olá! Gostaria de agendar o serviço: ${servico}. Podemos conversar sobre horários e valores?`
    window.open(`https://wa.me/5511942772083?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="serviços" className={styles.servicos}>
      <div className="container">
        <h2 className={styles.title}>Nossos Serviços</h2>
        <p className={styles.subtitle}>
          Escolha o serviço que melhor atende suas necessidades
        </p>
        
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'todos' ? styles.active : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos os serviços
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'destaque' ? styles.active : ''}`}
            onClick={() => setFilter('destaque')}
          >
            Mais procurados
          </button>
        </div>
        
        <div className={styles.grid}>
          {filteredServicos.map((servico) => (
            <div key={servico.id} className={`${styles.card} ${servico.destaque ? styles.featured : ''}`}>
              <div className={styles.cardImage}>
                <img src={servico.imagem} alt={servico.nome} />
                {servico.destaque && <span className={styles.badge}>⭐ Mais procurado</span>}
              </div>
              <div className={styles.cardContent}>
                <h3>{servico.nome}</h3>
                <p>{servico.descricao}</p>
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <Clock size={16} />
                    <span>{servico.duracao}</span>
                  </div>
                </div>
                <div className={styles.price}>
                  <span className={styles.priceValue}>{servico.preco}</span>
                </div>
                <div className={styles.domicilio}>
                  <span className={styles.domicilio}>{servico.domilicio}</span>             
                </div>
                <button 
                  onClick={() => agendarWhatsApp(servico.nome)}
                  className={styles.whatsappBtn}
                >
                  <Phone size={16} />
                  Agendar
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos