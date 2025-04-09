import "./MainImage.css";

const MainImage = ({ ruta, textoPrincipal, subtitulo }) => {
    return (
        <div>
            <img src={ruta} alt="Banner" className="imageMain" />
            <div className="overlay">
                <h1 className="textMain">{textoPrincipal}</h1>
                <h3 className="textSecond">{subtitulo}</h3>
            </div>
        </div>
    );
};

export default MainImage;
