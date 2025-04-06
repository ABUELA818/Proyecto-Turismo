import "./Hoteleria.css";

import Navbar from "../../../components/Navbar/Navbar";
import Tarjetas_Hoteleria_Der from "../../../components/Tarjetas_Hoteleria/Tarjetas_Hoteleria_Der";
import Footer from "../../../components/Footer/Footer";

import Tarjetas_Hoteleria_Izq from "../../../components/Tarjetas_Hoteleria/Tarjetas_Hoteleria_Izq";

export default function Hoteleria() {
    var Hotel_Nombre = "HOTEL VICTORIA EXPRESS";
    var Hotel_Info = "Descuento Genius.";
    var Hotel_Lista = [
        "Dispone de wifi gratuito.",
        "Incluye piscina ",
        "Desayuno",
        "Aire acondicionado."
    ]
    var Hotel_Calf = 4;
    var Hotel_Fotos = [
        "assets/Hoteleria/Vic_Express.jpg",
        "assets/Hoteleria/Vic_Express2.jpg",
        "assets/Hoteleria/Vic_Express3.jpg"
    ]

    return (
        <>
            <Navbar/>
            <div className="Hoteleria_Contenedor">
                <div className="Hoteleria_Fondo">
                    <div className="Msj_Hoteleria">
                        <h1>HOTELES</h1>
                        <h2>DURANGO</h2>
                        <div className="MsjH_Fondo">
                            <p>Diferentes páginas y precios, para su convenencia.</p>
                        </div>
                    </div>
                </div>

                <div className="Hoteleria_Seccion1">
                    <Tarjetas_Hoteleria_Der Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Izq Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Der Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Izq Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Der Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Izq Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                    <Tarjetas_Hoteleria_Der Hotel_Nombre={Hotel_Nombre} Hotel_Info={Hotel_Info} Hotel_Lista={Hotel_Lista} Hotel_Calf={Hotel_Calf} Hotel_Fotos={Hotel_Fotos}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
