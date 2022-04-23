import React from "react";
import "./CardImage.scss";

function CardImage({ image }) {
    return <div className="cardImage"><img className="imageSize" src={image} alt="error"></img></div>;
}

export default CardImage;
