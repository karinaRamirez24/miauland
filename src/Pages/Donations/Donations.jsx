import React from 'react'
import imageHome from "../../Assets/imagenes/cathand.jpg";
import MainImage from '../../Components/MainImage/MainImage';

const Donations = () => {
  return (
    <div>
       <MainImage ruta={imageHome} textoPrincipal={"Donaciones"} subtitulo={"¡Huellas de amor, ronroneos de gratitud!"}/>
    </div>
  )
}

export default Donations