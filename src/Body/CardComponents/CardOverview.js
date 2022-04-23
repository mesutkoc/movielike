import React from "react";
import "./CardOverview.scss"

function CardOverview({overview}) {
  return <div className="cardOverview"><label className="overview">{overview}</label></div>;
}

export default CardOverview;
