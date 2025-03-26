"use client"

import { useState, useEffect } from "react"
import "./Hoteleria.css"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"

// Componente de estrella personalizado
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#FFCC00"
    stroke="#FFCC00"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

// Componente de media estrella
const HalfStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="url(#half-fill)"
    stroke="#FFCC00"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stopColor="#FFCC00" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function Page() {
  const [isActive, setIsActive] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Imágenes para el carrusel del Hotel Victoria Express
  const victoriaImages = [
    "/assets/Hoteleria/Vic_Express.jpg",
    "/assets/Hoteleria/Vic_Express2.jpg",
    "/assets/Hoteleria/Vic_Express3.jpg",
  ]

  // Imágenes para el carrusel del Hotel Misión Express
  const misionImages = [
    "/assets/Hoteleria/mision_exp.jpg",
    "/assets/Hoteleria/mision_exp2.jpg",
    "/assets/Hoteleria/mision_exp3.jpg",
  ]

  // Imágenes para el carrusel de Fiesta Inn
  const fiestaInnImages = [
    "/assets/Hoteleria/fiesta_inn.png",
    "/assets/Hoteleria/fiesta_inn2.jpg",
    "/assets/Hoteleria/fiesta_inn3.jpg",
  ]

  // Imágenes para el carrusel de Hotel One
  const oneImages = ["/assets/Hoteleria/one.jpg", "/assets/Hoteleria/one2.jpg", "/assets/Hoteleria/one3.jpg"]

  // Imágenes para el carrusel de Hotel Gobernador
  const gobernadorImages = [
    "/assets/Hoteleria/gobernador.png",
    "/assets/Hoteleria/gobernador2.jpg",
    "/assets/Hoteleria/gobernador3.jpg",
  ]

  // Imágenes para el carrusel de Hampton Inn
  const hamptonImages = [
    "/assets/Hoteleria/hampton.jpg",
    "/assets/Hoteleria/hampton2.jpg",
    "/assets/Hoteleria/hampton3.jpg",
  ]

  const [currentVictoriaImage, setCurrentVictoriaImage] = useState(0)
  const [currentMisionImage, setCurrentMisionImage] = useState(0)
  const [currentFiestaInnImage, setCurrentFiestaInnImage] = useState(0)
  const [currentOneImage, setCurrentOneImage] = useState(0)
  const [currentGobernadorImage, setCurrentGobernadorImage] = useState(0)
  const [currentHamptonImage, setCurrentHamptonImage] = useState(0)

  // Efecto para marcar cuando el componente está montado en el cliente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Efecto para cambiar las imágenes cada 4 segundos
  useEffect(() => {
    if (!isMounted) return

    const victoriaInterval = setInterval(() => {
      setCurrentVictoriaImage((prev) => (prev + 1) % victoriaImages.length)
    }, 4000)

    const misionInterval = setInterval(() => {
      setCurrentMisionImage((prev) => (prev + 1) % misionImages.length)
    }, 4000)

    const fiestaInnInterval = setInterval(() => {
      setCurrentFiestaInnImage((prev) => (prev + 1) % fiestaInnImages.length)
    }, 4000)

    const oneInterval = setInterval(() => {
      setCurrentOneImage((prev) => (prev + 1) % oneImages.length)
    }, 4000)

    const gobernadorInterval = setInterval(() => {
      setCurrentGobernadorImage((prev) => (prev + 1) % gobernadorImages.length)
    }, 4000)

    const hamptonInterval = setInterval(() => {
      setCurrentHamptonImage((prev) => (prev + 1) % hamptonImages.length)
    }, 4000)

    return () => {
      clearInterval(victoriaInterval)
      clearInterval(misionInterval)
      clearInterval(fiestaInnInterval)
      clearInterval(oneInterval)
      clearInterval(gobernadorInterval)
      clearInterval(hamptonInterval)
    }
  }, [
    victoriaImages.length,
    misionImages.length,
    fiestaInnImages.length,
    oneImages.length,
    gobernadorImages.length,
    hamptonImages.length,
    isMounted,
  ])

  // Funciones para navegar por el carrusel de Victoria Express
  const prevVictoriaImage = () => {
    setCurrentVictoriaImage((prev) => (prev === 0 ? victoriaImages.length - 1 : prev - 1))
  }

  const nextVictoriaImage = () => {
    setCurrentVictoriaImage((prev) => (prev + 1) % victoriaImages.length)
  }

  // Funciones para navegar por el carrusel de Misión Express
  const prevMisionImage = () => {
    setCurrentMisionImage((prev) => (prev === 0 ? misionImages.length - 1 : prev - 1))
  }

  const nextMisionImage = () => {
    setCurrentMisionImage((prev) => (prev + 1) % misionImages.length)
  }

  // Funciones para navegar por el carrusel de Fiesta Inn
  const prevFiestaInnImage = () => {
    setCurrentFiestaInnImage((prev) => (prev === 0 ? fiestaInnImages.length - 1 : prev - 1))
  }

  const nextFiestaInnImage = () => {
    setCurrentFiestaInnImage((prev) => (prev + 1) % fiestaInnImages.length)
  }

  // Funciones para navegar por el carrusel de Hotel One
  const prevOneImage = () => {
    setCurrentOneImage((prev) => (prev === 0 ? oneImages.length - 1 : prev - 1))
  }

  const nextOneImage = () => {
    setCurrentOneImage((prev) => (prev + 1) % oneImages.length)
  }

  // Funciones para navegar por el carrusel de Hotel Gobernador
  const prevGobernadorImage = () => {
    setCurrentGobernadorImage((prev) => (prev === 0 ? gobernadorImages.length - 1 : prev - 1))
  }

  const nextGobernadorImage = () => {
    setCurrentGobernadorImage((prev) => (prev + 1) % gobernadorImages.length)
  }

  // Funciones para navegar por el carrusel de Hampton Inn
  const prevHamptonImage = () => {
    setCurrentHamptonImage((prev) => (prev === 0 ? hamptonImages.length - 1 : prev - 1))
  }

  const nextHamptonImage = () => {
    setCurrentHamptonImage((prev) => (prev + 1) % hamptonImages.length)
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>
              HOTELES
              <span>DURANGO</span>
            </h1>
            <p>Diferentes opciones y precios para su conveniencia.</p>
          </div>
        </div>

        {/* Hotel Cards */}
        <div className="hotels-container">
          {/* Hotel Victoria Express - Información a la izquierda, imagen a la derecha */}
          <div className="hotel-card">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-info">
              <h2>
                HOTEL VICTORIA
                <span>EXPRESS</span>
              </h2>
              <p className="hotel-highlight">Desde $1,100 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>WiFi gratuito en todas las áreas</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Piscina al aire libre</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>A 3 km del centro histórico</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Desayuno incluido</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} />
                  ))}
                  <HalfStarIcon />
                </div>
              </div>
            </div>

            <div className="hotel-image-container">
              <div className="hotel-accent-stripe"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {victoriaImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Hotel Victoria Express ${index + 1}`}
                        className={index === currentVictoriaImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevVictoriaImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextVictoriaImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {victoriaImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentVictoriaImage ? "active" : ""}`}
                          onClick={() => setCurrentVictoriaImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hotel Misión Express - Imagen a la izquierda, información a la derecha */}
          <div className="hotel-card hotel-card-reverse">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-image-container hotel-image-container-reverse">
              <div className="hotel-accent-stripe hotel-accent-stripe-reverse"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {misionImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Hotel Misión Express ${index + 1}`}
                        className={index === currentMisionImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevMisionImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextMisionImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {misionImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentMisionImage ? "active" : ""}`}
                          onClick={() => setCurrentMisionImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="hotel-info">
              <h2>
                HOTEL MISIÓN
                <span>EXPRESS</span>
              </h2>
              <p className="hotel-highlight">Desde $1,250 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Gimnasio y centro de negocios</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Desayuno buffet completo</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Ubicado en zona comercial</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fiesta Inn - Información a la izquierda, imagen a la derecha */}
          <div className="hotel-card">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-info">
              <h2>
                FIESTA INN
                <span>DURANGO</span>
              </h2>
              <p className="hotel-highlight">Desde $1,800 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>WiFi de alta velocidad</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Restaurante y bar en el hotel</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>A 10 minutos del aeropuerto</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Piscina climatizada</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
              </div>
            </div>

            <div className="hotel-image-container">
              <div className="hotel-accent-stripe"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {fiestaInnImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Fiesta Inn Durango ${index + 1}`}
                        className={index === currentFiestaInnImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevFiestaInnImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextFiestaInnImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {fiestaInnImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentFiestaInnImage ? "active" : ""}`}
                          onClick={() => setCurrentFiestaInnImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hotel One - Imagen a la izquierda, información a la derecha */}
          <div className="hotel-card hotel-card-reverse">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-image-container hotel-image-container-reverse">
              <div className="hotel-accent-stripe hotel-accent-stripe-reverse"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {oneImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Hotel One Durango ${index + 1}`}
                        className={index === currentOneImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevOneImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextOneImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {oneImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentOneImage ? "active" : ""}`}
                          onClick={() => setCurrentOneImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="hotel-info">
              <h2>
                HOTEL ONE
                <span>DURANGO</span>
              </h2>
              <p className="hotel-highlight">Desde $1,350 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Desayuno continental incluido</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Servicio de lavandería</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Cerca de zona comercial</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Gobernador - Información a la izquierda, imagen a la derecha */}
          <div className="hotel-card">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-info">
              <h2>
                HOTEL GOBERNADOR
                <span>DURANGO</span>
              </h2>
              <p className="hotel-highlight">Desde $950 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>WiFi en áreas comunes</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Restaurante tradicional</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>En el centro histórico</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Servicio a la habitación</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3].map((star) => (
                    <StarIcon key={star} />
                  ))}
                  <HalfStarIcon />
                </div>
              </div>
            </div>

            <div className="hotel-image-container">
              <div className="hotel-accent-stripe"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {gobernadorImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Hotel Gobernador Durango ${index + 1}`}
                        className={index === currentGobernadorImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevGobernadorImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextGobernadorImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {gobernadorImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentGobernadorImage ? "active" : ""}`}
                          onClick={() => setCurrentGobernadorImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hampton Inn - Imagen a la izquierda, información a la derecha */}
          <div className="hotel-card hotel-card-reverse">
            <div className="hotel-bg-black"></div>
            <div className="hotel-bg-white"></div>

            <div className="hotel-image-container hotel-image-container-reverse">
              <div className="hotel-accent-stripe hotel-accent-stripe-reverse"></div>
              <div className="hotel-image carousel">
                {isMounted && (
                  <>
                    {hamptonImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Hampton Inn Durango ${index + 1}`}
                        className={index === currentHamptonImage ? "active" : ""}
                      />
                    ))}
                    <button className="carousel-arrow carousel-prev" onClick={prevHamptonImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={nextHamptonImage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <div className="carousel-indicators">
                      {hamptonImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentHamptonImage ? "active" : ""}`}
                          onClick={() => setCurrentHamptonImage(index)}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="hotel-info">
              <h2>
                HAMPTON INN
                <span>DURANGO</span>
              </h2>
              <p className="hotel-highlight">Desde $1,650 MXN por noche.</p>

              <div className="hotel-amenities">
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Desayuno caliente incluido</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Gimnasio y piscina cubierta</span>
                </div>
                <div className="amenity">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Cerca de atracciones turísticas</span>
                </div>
                <div className="hotel-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

