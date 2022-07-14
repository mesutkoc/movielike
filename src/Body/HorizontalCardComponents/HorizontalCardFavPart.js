import React from "react";
import "./HorizontalCardFavPart.scss"
import { ReactComponent as CirclePlay } from "../../Icons/circle-play.svg"
import { ReactComponent as Star } from "../../Icons/star-solid.svg"
import { ReactComponent as Heart } from "../../Icons/heart-solid.svg"
import { ReactComponent as Eye } from "../../Icons/eye-solid.svg"
import randomPoint from "../../helpers";
import { Link } from "react-router-dom";

function HorizontalCardFavPart({id}) {

  const point = randomPoint();
  
  return (<div className="favItemss">

    <div className="userActions">
      <Link to={`/watch/${id}`}><CirclePlay className="playIcon"></CirclePlay></Link>
      <Star className="star"></Star>
      <Heart className="heart"></Heart>
    </div>
    <div className="viewCounts">
      <Eye className="eye"></Eye>
      <label className="count">{point}</label>
    </div>
  </div>);
}

export default HorizontalCardFavPart;
