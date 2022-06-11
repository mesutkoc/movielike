import React from "react";
import "./HorizontalCardImage.scss";

function HorizontalCardImage({ image }) {
    return <div className="cardImages"><img className="imageSizes" src={image} alt="error"></img></div>;
}

export default HorizontalCardImage;
