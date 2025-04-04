import React from 'react'
import imageHome from "../../Assets/imagenes/donationTwo.png";
import MainImage from '../../Components/MainImage/MainImage';

const Donations = () => {
  return (
    <div>
       <MainImage ruta={imageHome} textoPrincipal={"Donaciones"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}/>
    </div>
  )
}

export default Donations