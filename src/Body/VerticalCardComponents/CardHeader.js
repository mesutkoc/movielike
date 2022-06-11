import React from "react";
import "./CardHeader.scss"
function CardHeader({title}) {

  return <div className="cardHeader"><label className="cardTitle">{title}</label></div>;
}

export default CardHeader;
