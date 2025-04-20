import React from 'react'
import "./Adoptions.css"
import imageHome from "../../Assets/imagenes/donationTwo.png";
import MainImage from '../../Components/MainImage/MainImage';

const Container = ({ image, numeration, text }) => {
  return (
    <div className="adoptions__container-steps">
      <div className="adoptions__steps">
        <img className="adoptions__steps-img" src={image} alt="" />
        <h1 className="adoptions__steps-num">{numeration}</h1>
      </div>
      <h3 className="adoptions__steps-text">{text}</h3>
    </div>
  )
}

const Adoptions = () => {
  return (
    <div className='adoptions'>
      <div>
        <MainImage ruta={imageHome} textoPrincipal={"Adopciones"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."} />
      </div>
      <div className='adoptions__container'>
        <Container image={imageHome} numeration={1} text={"Abre tu corazón y deja que tu mejor amigo gatuno te elija a ti."}></Container>
        <Container image={imageHome} numeration={2} text={"Realiza tu formulario"}></Container>
        <Container image={imageHome} numeration={3} text={"Acude a tu cita. Nota: No olvides traer transportadora"}></Container>
        <button className='adoptions__button'> Que empiece esta hermosa aventura </button>
      </div>
    </div>
  )
}

export default Adoptions