import "./MainImage.css";

const MainImage = ({ ruta, textoPrincipal, subtitulo }) => {
    return (
        <div>
            <img src={ruta} alt="Mujer y gato en escalas de grises" className="imageMain" />
            <h1 className="textMain">{textoPrincipal}</h1>
            <h2 className="textSecond">{subtitulo}</h2>
        </div>
    );
};

export default MainImage;
