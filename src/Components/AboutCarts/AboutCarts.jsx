import "./AboutCarts.css";

const AboutCarts = ({ image, title, conten, order }) => {
    const orderClass = order === 2 ? "reverse" : "";

    return (
        <div className={`aboutCarts ${orderClass}`}>
            <img className="aboutCarts__image" src={image} alt="" />
            <div className="aboutCarts__textContainer">
                <h3 className="aboutCarts__textContainer-title">
                    {title}
                </h3>
                <p className="aboutCarts__textContainer-text">
                    {conten}
                </p>
            </div>
        </div>
    );
};

export default AboutCarts;