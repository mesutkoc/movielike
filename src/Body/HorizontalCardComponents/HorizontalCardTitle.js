import React from "react";
import "./HorizontalCardTitle.scss"

function HorizontalCardTitle({title}) {
  return <div className="cardHeaders"><label className="cardTitles">{title}</label></div>;
}

export default HorizontalCardTitle;
