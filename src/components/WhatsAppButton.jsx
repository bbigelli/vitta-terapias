import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppButton.module.css'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511942772083?text=Olá! Gostaria de mais informações sobre as terapias e serviços."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} color="#fff" />
      <span className={styles.tooltip}>Fale conosco!</span>
    </a>
  )
}

export default WhatsAppButton