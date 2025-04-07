import React from 'react'
import "./ContactUs.css"
import imageHome from "../../Assets/imagenes/adoptionsThree.png";
import MainImage from '../../Components/MainImage/MainImage';

const ContactUs = () => {
  return (
    <div>
       <MainImage ruta={imageHome} textoPrincipal={"Contactanos"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}/>
    </div>
  )
}

export default ContactUs