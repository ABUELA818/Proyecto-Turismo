import Image from "next/image";
import Estrellas_Calf from "../Estrellas/Estrellas";
import "./Comentarios.css";

interface ComentariosProps {
  Img_Ruta: string;
  Img_User: string;
  User: string;
  Calificacion: number;
  Comentario: string;
}

export default function Comentarios({
  Img_Ruta,
  Img_User,
  User,
  Calificacion,
  Comentario,
}: ComentariosProps) {
  return (
    <>
      <div className="Tarjeta_Comentario">
        <div className="Imagen_Comentario">
          <Image
            src={"/assets/Login/" + Img_Ruta}
            alt="Img_Comentario"
            width={294}
            height={200}
            className="Img_Comentario"
          />
        </div>
        <div className="Usuario">
          <div className="Img_User">
            <Image
              src={"/assets/Perfil/" + Img_User}
              alt="Img_User"
              width={90}
              height={90}
              className="Img_User"
            />
          </div>
          <div className="Info_Usuario">
            <p>{User}</p>
            <Estrellas_Calf calificacion={Calificacion} />
          </div>
        </div>
        <div className="Comentario">
          <p>{Comentario}</p>
        </div>
      </div>
    </>
  );
}
