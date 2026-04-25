import { useState, useEffect } from 'react'
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './InstagramFeed.module.css'

// URLs dos posts do Instagram @_vitta.terapias
// Substitua pelos links reais dos posts
const instagramPosts = [
  {
    id: 1,
    embedUrl: 'https://www.instagram.com/p/DXfGhZCETI6/embed/',
    thumbnail: '/imagens/instagram-post-1.jpg'
  },
  {
    id: 2,
    embedUrl: 'https://www.instagram.com/p/DW1T72LjQ4u/embed/',
    thumbnail: '/imagens/instagram-post-2.jpg'
  },
  {
    id: 3,
    embedUrl: 'https://www.instagram.com/p/DWBgujDDZL5/embed/',
    thumbnail: '/imagens/instagram-post-3.jpg'
  },
  {
    id: 4,
    embedUrl: 'https://www.instagram.com/p/DT1Z0WgDOys/embed/',
    thumbnail: '/imagens/instagram-post-4.jpg'
  },
  {
    id: 5,
    embedUrl: 'https://www.instagram.com/p/DTnbtYPjSEU/embed/',
    thumbnail: '/imagens/instagram-post-5.jpg'
  },
  {
    id: 6,
    embedUrl: 'https://www.instagram.com/p/DQ-ycO0jF71/embed/',
    thumbnail: '/imagens/instagram-post-6.jpg'
  }
]

const InstagramFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [postsPerView, setPostsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPostsPerView(1)
      } else if (window.innerWidth <= 1024) {
        setPostsPerView(2)
      } else {
        setPostsPerView(3)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex + postsPerView < instagramPosts.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const visiblePosts = instagramPosts.slice(currentIndex, currentIndex + postsPerView)

  return (
    <section id="instagram" className={styles.instagram}>
      <div className="container">
        <h2 className={styles.title}>
          <Instagram size={28} />
          Acompanhe no Instagram
        </h2>
        <p className={styles.subtitle}>
          Veja nosso dia a dia, depoimentos e novidades no @_vitta.terapias
        </p>
        
        <div className={styles.sliderContainer}>
          {currentIndex > 0 && (
            <button onClick={prevSlide} className={`${styles.navButton} ${styles.prev}`}>
              <ChevronLeft size={24} />
            </button>
          )}
          
          <div className={styles.feed}>
            {visiblePosts.map((post) => (
              <div key={post.id} className={styles.post}>
                <iframe
                  src={post.embedUrl}
                  className={styles.iframe}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={`Post Instagram ${post.id}`}
                ></iframe>
              </div>
            ))}
          </div>
          
          {currentIndex + postsPerView < instagramPosts.length && (
            <button onClick={nextSlide} className={`${styles.navButton} ${styles.next}`}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
        
        <div className={styles.cta}>
          <a 
            href="https://www.instagram.com/_vitta.terapias/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <Instagram size={20} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed