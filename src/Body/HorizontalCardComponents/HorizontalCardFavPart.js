import React from "react";
import "./HorizontalCardFavPart.scss"
import {ReactComponent as CirclePlay} from "../../Icons/circle-play.svg"
import {ReactComponent as Star} from "../../Icons/star-solid.svg"
import {ReactComponent as Heart} from "../../Icons/heart-solid.svg"
import {ReactComponent as Eye} from "../../Icons/eye-solid.svg"
import randomPoint from "../../helpers";

function HorizontalCardFavPart() {

  const point = randomPoint();

  return (<div className="favItemss">
      
        <div className="userActions">
            <CirclePlay className="playIcon"></CirclePlay>
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
