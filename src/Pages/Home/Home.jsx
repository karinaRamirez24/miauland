import React from "react";
import "./Home.css";
import MainImage from "../../Components/MainImage/MainImage";
import Cards from "../../Components/Cards/Cards";
import imageHome from "../../Assets/imagenes/Home-cat.jpg";
const Home = () => {
    return (
        <div className="home">
            <div>
                <MainImage ruta={imageHome} textoPrincipal={"Miauland"} subtitulo={"Bienvenido a Miauland"} />
            </div>
            <h1>Tu apoyo cuenta</h1>
            <h3>Gracias a tu apoyo durante toda nuestra existencia hemos ayudado aproximadamente a:</h3>
            <div>
                <h1>+ 40 Gatos Rescatados</h1>
                <img src="" alt="" />
            </div>
            <h1>Ronroneos de amor</h1>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <h1>¿Por qué es mejor adoptar?</h1>
            <div className="home__container">
                <Cards image={imageHome} text={"El Hallasgo del tesoro"} />
            </div>
        </div>
    );
};

export default Home;
