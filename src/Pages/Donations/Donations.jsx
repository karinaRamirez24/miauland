import React from "react";
import "./Donations.css";
import imageHome from "../../Assets/imagenes/cathand.jpg";
import MainImage from "../../Components/MainImage/MainImage";

const Donations = () => {
  return (
    <div className="donations">
      <div>
        <MainImage ruta={imageHome} textoPrincipal={"Donaciones"} subtitulo={"¡Huellas de amor, ronroneos de gratitud!"}/>
      </div>
      <div className="donations__container">
        <h2 className="donations__container-title">¡Apoyanos!</h2>
        <h3 className="donations__container-methods">Método de donativo del donativo</h3>
        <div className="donations__types-of-donations">
        <button className="donations__transfer">Transferencia Bancaria <box-icon className= "transfer-icon"  name="dollar" ></box-icon></button>
        </div>

        <h3 className="donations__method-title">Donación con Transferencia Bancaria</h3>

        <p className="donations__info-title">Banco: Banorte</p>
        <div className="donations__account-info">
          <p>Nombre: Miauland</p>
          <p>Cuenta: 1234567890</p>
          <p>CLABE: 123456789012345678</p>
        </div>
        <h3 className="donations__frace">¡COMO EL AMOR GATUNO NO HAY NINGUNO!</h3>
      </div>
    </div>
  );
};

export default Donations;
