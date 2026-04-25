import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react'
import styles from './Contato.module.css'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.nome}. ${formData.mensagem} Meu telefone: ${formData.telefone}`
    window.open(`https://wa.me/5511942772083?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511942772083?text=Olá! Gostaria de mais informações sobre os serviços.', '_blank')
  }

  return (
    <section id="contato" className={styles.contato}>
      <div className="container">
        <h2 className={styles.title}>Entre em contato</h2>
        <p className={styles.subtitle}>
          Ficou com alguma dúvida? Quer agendar uma sessão? Fale comigo!
        </p>
        
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>Informações de contato</h3>
              
              <div className={styles.infoItem}>
                <Phone size={20} />
                <div>
                  <strong>WhatsApp</strong>
                  <p>(11) 94277-2083</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
  <MapPin size={20} />
  <div>
    <strong>Localização</strong>
    <p>Interlagos, São Paulo - SP</p>
    <p>Rua Manguaba, Número: 40 - Sala 5</p>
    
    {/* Mapa interativo do Google Maps */}
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.789!2d-46.693419!3d-23.650924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5088a6d7c8a1%3A0x8b2f5c3e6a4d7b9f!2sR.%20Manguaba%2C%2040%20-%20Interlagos%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004815-300!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa da localização - Vitta Terapias"
      ></iframe>
    </div>
    
    <p style={{ marginTop: '0.5rem' }}>📍 Atendimento no local e domiciliar</p>
    
    {/* Botão para abrir no Google Maps */}
    <a 
      href="https://maps.google.com/?q=Rua+Manguaba+40+Interlagos+Sao+Paulo"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mapButton}
    >
      Abrir no Google Maps →
    </a>
  </div>
</div>
              
              <div className={styles.infoItem}>
                <Clock size={20} />
                <div>
                  <strong>Horário de funcionamento</strong>
                  <p>Segunda a Sexta: 13h às 20h</p>
                  <p>Sábado: 09h às 15h</p>
                </div>
              </div>
              
              <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
                <Phone size={18} />
                Falar no WhatsApp agora
              </button>
              
              <div className={styles.social}>
                <a href="https://www.instagram.com/_vitta.terapias/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  required
                  onChange={handleChange}
                  value={formData.nome}
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone com DDD"
                  required
                  onChange={handleChange}
                  value={formData.telefone}
                />
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem..."
                  rows="5"
                  required
                  onChange={handleChange}
                  value={formData.mensagem}
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                <Send size={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato