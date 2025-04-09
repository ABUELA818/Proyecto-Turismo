"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./Navbar.css"
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="Barra">
            <div className="input-container">
                <input type="text" name="text" className="input" placeholder="Buscar"/>
                <FaSearch size={20} className="icon" />
            </div>
            <div className="Opciones">
                <div><Link href="/Landing" className="opcion final">INICIO</Link></div>
                <div><Link href="." className="opcion medio">NATURALEZA</Link></div>
                <div><Link href="/Landing/Servicios_Turisticos" className="opcion centro">SERVICIOS TURISTICOS</Link></div>
                <div className="Img_Logo">
                    <Image 
                        src="/assets/Dgo_Logo.png" 
                        alt="Logo"
                        width={150}
                        height={70}
                    />
                </div>
                <div><Link href="/Landing/Gastronomia" className="opcion centro">GASTRONOMIA</Link ></div>
                <div><Link href="/Landing/Hoteleria" className="opcion medio">HOTELERIA</Link></div>
                <div><Link href="." className="opcion final">CONTACTO</Link></div>
            </div>
            <div className="Contenedor_Perfil"><Link href="." ><FaUser className="Perfil" /></Link></div>
        </nav>  
    )
}
