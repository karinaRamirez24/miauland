import React from "react";
import "./Donations.css";
import imageHome from "../../Assets/imagenes/cathand.jpg";
import MainImage from "../../Components/MainImage/MainImage";

const Donations = () => {
  return (
    <div className="content-initial">
      <div>
        <MainImage
          ruta={imageHome}
          textoPrincipal={"Donaciones"}
          subtitulo={"¡Huellas de amor, ronroneos de gratitud!"}
        />
      </div>
      <div className="content-initial__text">
        <h2 >¡Apoyanos!</h2>
        <h3>Método de donativo del donativo</h3>
        <div>
          <p>Transferencia Bancaria</p>
        </div>
        <h3>Donación con Transferencia Bancaria</h3>
        <div>
          <h3>Banco: Banorte</h3>
          <p>Nombre: Miauland</p>
          <p>Cuenta: 1234567890</p>
          <p>CLABE: 123456789012345678</p>
        </div>
        <h3>!COMO EL AMOR GATUNO NO HAY NINGUNO¡</h3>
      </div>
    </div>
  );
};

export default Donations;
