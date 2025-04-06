"use client";

/*=====
Estilos
=====*/
import "./Negocio.css";

/*=======================
Importacion de los iconos
=======================*/
import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaPaperclip,
  FaPaperPlane,
  FaTimesCircle,
} from "react-icons/fa";

/*==============
Cositas de next
==============*/
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/*========================
Importacion de componentes
========================*/
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Estrellas_Calf from "../../components/Estrellas/Estrellas";
import Calificar from "../../components/Calificar/Calificar";
import Comentarios from "../../components/Comentarios/Comentarios";

/*==================================================
Funcion para que muestre todas las imagenes del menu
me dio weba hacerlo un componente
==================================================*/
function Galeria_Menu({ lista_menu }) {
  return (
    <div className="Galeria_Menu_Contenedor">
      {lista_menu.map((elemento, index) => (
        <div key={index} className="Tarjeta_Menu">
          <Image
            src={"/assets/Negocio/" + elemento}
            alt="Negocio"
            width={300}
            height={400}
          />
        </div>
      ))}
    </div>
  );
}

/*===============
Funcion principal
===============*/
export default function Negocio() {
  /*===============================================================================
Aqui tengo todas las variables que se muestran referentes a informacion del negocio
=================================================================================*/
  var Nombre_Negocio = "Casa Abuela";
  var Msj_Abierto = "Abierto ahora";
  var Msj_Cerrado = "Cerrado";
  var Hora_Apertura = "7:30 am";
  var Hora_Cierre = "7:00 pm";
  var Negocio_Direccion =
    "Salvador Nava Rdgz # 104 pte (antes fresno) Zona Centro , CP.34000, DURANGO";
  var Negocio_Numero = "618 811 6792";
  var Negocio_Correo = "casaabuela.durango@gmail.com";
  var Negocio_Calificacion = 4;
  var Msj_Menu =
    "Les compartimos nuestro Menú a domicilio y para llevar Casa Abuela hasta tu casa";
  var Imagenes_Menus = ["Menu1.jpg", "Menu2.jpg", "Menu3.jpg", "Menu4.jpg"];

  /*===============================================
Estan son variables de ejemplo para los comentarios
=================================================*/
  var Img_Ruta = "fondo.jpg";
  var Img_User = "Img_Perfil.jpg";
  var User = "Maria Eliot";
  var Calificacion = 3;
  var Comentario = "bonita ciudad, la gente es muy amable, volveré";

  /*=================================================================================
  Todo esto es para la funcion de enviar la calificacion, comentario e imagen a la bd
  Lo deje mas o menos preparado pero no se si les sirva
===================================================================================*/
  const [image, setImage] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Por favor, selecciona una calificación antes de enviar.");
      return;
    }

    const data = {
      rating,
      comment,
      image, // Guardará la imagen en base64 (se recomienda enviar al backend y almacenar en la BD o un servidor de archivos)
    };

    console.log("Datos listos para enviar:", data);
    // Aquí pueden hacer la petición a la bd (creo)
  };

  return (
    <>
      <Navbar />
      <div className="Negocio_Contenedor">
        <div className="Negocio_Fondo">
          <div className="Msj_Negocio">
            <h1>{Nombre_Negocio}</h1>
          </div>
        </div>
        <div className="Negocio_Seccion1">
          <div className="Negocio_Seccion1_Izq">
            <div className="Seccion1N_Redes">
              <Link href="./" className="Negocio_Redes">
                <FaGoogle />
              </Link>
              <Link href="./" className="Negocio_Redes">
                <FaFacebookF />
              </Link>
              <Link href="./" className="Negocio_Redes">
                <FaInstagram />
              </Link>
            </div>
            <div className="Seccion1_Abierto">
              <h2>{Msj_Abierto}</h2>
            </div>
            <div className="Seccion1_Horario">
              <h2>Horario de atención</h2>
            </div>
            <div className="Seccion1_Horario2">
              <h2>{Hora_Apertura}</h2>
              <div className="Raya_Horario"></div>
              <h2>{Hora_Cierre}</h2>
            </div>
            <div className="Seccion1_NegocioInfo">
              <p>{Negocio_Direccion}</p>
              <p>{Negocio_Numero}</p>
              <p>{Negocio_Correo}</p>
            </div>
            <div className="Seccion1_NegocioCalf">
              <Estrellas_Calf calificacion={Negocio_Calificacion} />
            </div>
          </div>

          <div className="Negocio_Seccion1_Der">
            <div className="Mapa_Contenedor">
              {/*===================================================================
                Aqui es el espacio para colocar el mapa con la direccion del negocio
                Es el cuadrito azul a un lado de la info del negocio
                 ================================================================*/}
            </div>
          </div>
        </div>
        <div className="Negocio_Seccion2">
          <div className="Negocio_Seccion2_Izq"></div>
          <div className="Negocio_Seccion2_Der">
            <div className="Conocenos">
              <h2>Ven y Conócenos!</h2>
            </div>
            <div className="Msj_Menu">
              <h3>{Msj_Menu}</h3>
            </div>
            <Galeria_Menu lista_menu={Imagenes_Menus} />
          </div>
        </div>
        <div className="Negocio_Seccion3">
          <div className="Seccion3_Izq">
            <h4>Cuéntanos tu experiencia</h4>
          </div>
          <div className="Seccion3_Der">
            <div className="Contenedor_InputEstrellas">
              <Calificar rating={rating} setRating={setRating} />
            </div>
            <div className="Seccion3_Comentario">
              <textarea
                className="Caja_Comentario"
                placeholder="Añade un comentario"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="Comentario_Botones">
                <div className="Btn_Añadir_Imagen">
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    onChange={handleImageChange}
                    className="Imagen_Input"
                  />
                  <label htmlFor="fileInput" className="Clip_Icono">
                    <FaPaperclip />
                  </label>
                  {image && (
                    <div className="Previsualizacion_Img">
                      <img src={image} alt="Preview" className="Prev_Imagen" />
                      <button onClick={removeImage} className="Eliminar_Imagen">
                        <FaTimesCircle />
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className="Btn_Enviar_Comentario"
                  onClick={handleSubmit}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Negocio_Seccion4">
          <div className="Seccion4_sombra"></div>
          <div className="Negocio_Comentarios">
            <div className="Negocio_Comentarios_Contenedor">
              <Comentarios
                Img_Ruta={Img_Ruta}
                Img_User={Img_User}
                User={User}
                Calificacion={Calificacion}
                Comentario={Comentario}
              />
              <Comentarios
                Img_Ruta={Img_Ruta}
                Img_User={Img_User}
                User={User}
                Calificacion={Calificacion}
                Comentario={Comentario}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
