import "./MainImage.css";

const MainImage = ({ ruta, textoPrincipal, subtitulo }) => {
    return (
        <div>
            <img src={ruta} alt="Mujer y gato en escalas de grises" className="imageMain" />
            <div className="overlay">
                <h1 className="textMain">{textoPrincipal}</h1>
            </div>
            <div className="overlaySecond">
                <h2 className="textSecond">{subtitulo}</h2>
            </div>
        </div>
    );
};

export default MainImage;
