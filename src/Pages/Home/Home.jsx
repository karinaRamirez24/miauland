import React from "react";
import "./Home.css";
import MainImage from "../../Components/MainImage/MainImage";
import imageHome from "../../Assets/imagenes/catHome.png";
const Home = () => {
    return (
        <div className="content-initial">
            <div>
                <MainImage ruta={imageHome} textoPrincipal={"Miauland"} subtitulo={"Bienvenido a Miauland"}/>
            </div>
        </div>
    );
};

export default Home;
