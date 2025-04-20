import React from "react";
import "./ContactUs.css";
import imageHome from "../../Assets/imagenes/catFlower.jpg";
import MainImage from "../../Components/MainImage/MainImage";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div>
        <MainImage ruta={imageHome} textoPrincipal={"Contactanos"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}/>
      </div>
      <div className="contactUs__container">
        <h1>Ven a conocer a quien podria ser tu mejor amigo ronroneador.</h1>
      </div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.882773704143!2d-99.07660364965301!3d19.50367863922373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa4170a1abad%3A0x2b9e38abc9831b6b!2sC.%20Harlington%2C%20Las%20Vegas%20Xalostoc%2C%2055330%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1745164397302!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
