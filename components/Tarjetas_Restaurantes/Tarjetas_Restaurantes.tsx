import Image from "next/image";
import Estrellas_Calf from "../Estrellas/Estrellas";
import "./Tarjetas_Restaurantes.css";
import Link from "next/link";

interface Tarjetas_Restaurantes_Props {
  Img_Restaurantes: string;
  Restaurantes_Nombres: string;
  Restaurantes_Calificacion: boolean;
}

export default function Tarjetas_Restaurantes({
  Img_Restaurantes,
  Restaurantes_Nombres,
  Restaurantes_Calificacion,
}: Tarjetas_Restaurantes_Props) {
  return (
    <>
      <Link href="/Negocio">
        <div className="Tarjeta">
          <Image
            src={"/assets/Landing/" + Img_Restaurantes}
            alt="Transporte"
            width={300}
            height={400}
            className="Img_Tarjeta"
          />
          <div className="Res_Info">
            <p>{Restaurantes_Nombres}</p>
            <div className="Estrellas_Contenedor">
              <Estrellas_Calf calificacion={Restaurantes_Calificacion} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
