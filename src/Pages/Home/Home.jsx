import React from "react";
import "./Home.css";
import MainImage from "../../Components/MainImage/MainImage";
import Cards from "../../Components/Cards/Cards";
import imageHome from "../../Assets/imagenes/Home-cat.jpg";
import homeCat from "../../Assets/imagenes/GatoInicio.png";
const Home = () => {
    return (
        <div className="home">
            <div>
                <MainImage ruta={imageHome} textoPrincipal={"Miauland"} subtitulo={"Bienvenido a Miauland"} />
            </div>
            <div className="home__container">
                <h1 className="home__container-title">Tu apoyo cuenta</h1>
                <h3 className="home__container-text">Gracias a tu apoyo durante toda nuestra existencia hemos ayudado aproximadamente a:</h3>
                <div className="home__container-counter">
                    <h1 className="home__container-counter-text">+ 40 Gatos Rescatados</h1>
                    <img className="home__container-counter-img" src={homeCat} alt="" />
                </div>
                <h1 className="home__container-title-section">Ronroneos de amor</h1>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <h1 className="home__container_title-question">¿Por qué es mejor adoptar?</h1>
                <div className="home__cards-container">
                    <Cards image={imageHome} text={"El Hallasgo del tesoro"} />
                    <Cards image={imageHome} text={"Desbloqueaste un logro épico"} />
                    <Cards image={imageHome} text={"Sorpresa mejor que comida gratis"} />
                    <Cards image={imageHome} text={"El fan número 1 de tu vida"} />
                    <Cards image={imageHome} text={"Maestro del descanso extremo"} />
                    <Cards image={imageHome} text={"¡Felicidad 24/7!"} />
                </div>
            </div>
        </div>
    );
};

export default Home;
