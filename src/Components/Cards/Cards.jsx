import "./Cards.css";

const Cards = ({ image, text}) => {
    return (
        <div className="cards">
            <img className="cards__image" src={image} />
            <p className="cards__title">{text}</p>
            <button className="cards__button"><box-icon className="transfer-icon" name="chevron-down" ></box-icon></button>
        </div>
    );
};

export default Cards;
