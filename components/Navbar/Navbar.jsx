"use client"
import Image from "next/image"
import "./Navbar.css"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={`Barra ${menuOpen ? "menu-open" : ""}`}>
      <div className="Opciones">
        <div>
          <Link href="/Landing" className="opcion final">
            INICIO
          </Link>
        </div>
        <div>
          <Link href="/Landing/Naturaleza" className="opcion medio">
            NATURALEZA
          </Link>
        </div>
        <div>
          <Link href="/Landing/Servicios_Turisticos" className="opcion centro">
            SERVICIOS TURISTICOS
          </Link>
        </div>
        <div className="Img_Logo" onClick={toggleMenu}>
          <Image src="/assets/Dgo_Logo.png" alt="Logo" width={150} height={70} />
        </div>
        <div>
          <Link href="/Landing/Gastronomia" className="opcion centro">
            GASTRONOMIA
          </Link>
        </div>
        <div>
          <Link href="/Landing/Hoteleria" className="opcion medio">
            HOTELERIA
          </Link>
        </div>
        <div>
          <Link href="." className="opcion final">
            PERFIL
          </Link>
        </div>
      </div>
    </nav>
  )
}

