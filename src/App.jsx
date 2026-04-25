import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import InstagramFeed from './components/InstagramFeed'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <InstagramFeed />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App