import React from "react";
import "./Home.css";
import MainImage from "../../Components/MainImage/MainImage";
import imageHome from "../../Assets/imagenes/catHome.png";
const Home = () => {
    return (
        <div className="content-initial">
            <div>
                <MainImage ruta={imageHome} textoPrincipal={"Miauland"} subtitulo={"Bienvenido a Miauland"} />
            </div>
            <div className="content-initial__text">
                <h1>¡Bienvenido a Miauland!</h1>
                <p>
                    Aquí encontrarás una amplia variedad de productos para tu
                    gato, desde comida y juguetes hasta accesorios y cuidados.
                    ¡Explora nuestra tienda y descubre todo lo que tenemos para
                    ofrecerte!
                </p>
                <p>
                    En Miauland, nos apasiona cuidar de nuestros amigos felinos y
                    queremos ayudarte a encontrar lo mejor para ellos. Si tienes
                    alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                </p>
            </div>
        </div>
    );
};

export default Home;
