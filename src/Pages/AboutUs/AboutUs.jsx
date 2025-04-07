import React from 'react'
import "./AboutUs.css"
import imageHome from "../../Assets/imagenes/adoptionsThree.png";
import MainImage from '../../Components/MainImage/MainImage';

const AboutUs = () => {
  return (
    <div>
       <MainImage ruta={imageHome} textoPrincipal={"Nosotros"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}/>
    </div>
  )
}

export default AboutUs