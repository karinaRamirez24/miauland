import React from "react";
import "./Footer.css";
import miauland from "../../Assets/imagenes/Miauland.png";

const Footer = () => {
    return (
        <div>
            <footer className="main__content">
                <div className="main__content-initial">
                    <div className="initial__img">
                        <img src={miauland} alt="Miauland" className="img-logo" />
                    </div>
                    <div className="initial__text">
                        <h4 className="text__main">
                            Copyright© 2025-2026 <b className="text__bold">MIAULAND |</b> Todas las marcas e imágenes
                            mencionados son propiedad de sus dueños.
                        </h4>
                        <h4 className="text__main-second">
                            <b className="text__bold">Diseñado por:</b> Aloga Software Solutions S.A. de C.V.
                        </h4>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
