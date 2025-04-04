import React from 'react'
import imageHome from "../../Assets/imagenes/adoptionsThree.png";
import MainImage from '../../Components/MainImage/MainImage';

const Adoptions = () => {
  return (
    <div>
       <MainImage ruta={imageHome} textoPrincipal={"Adopciones"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}/>
    </div>
  )
}

export default Adoptions