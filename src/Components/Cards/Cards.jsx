import "./Cards.css";

const Cards = ({ image, text }) => {
    return (
        <div className="cards">
            <img className="cards__image" src={image} />
            <p className="cards__title">{text}</p>
            <div className="cards__button-container">
                <button className="cards__button"><box-icon className="cards-icon" name="chevron-down" ></box-icon></button>
            </div>
        </div>
    );
};

export default Cards;
