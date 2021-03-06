import React from "react";
import "./FavPart.scss"
import {ReactComponent as CirclePlay} from "../../Icons/circle-play.svg"
import {ReactComponent as Star} from "../../Icons/star-solid.svg"
import {ReactComponent as Heart} from "../../Icons/heart-solid.svg"

function FavPart() {
  return (<div className="favItems">
      
        <div className="userAction">
            <CirclePlay className="playIcon"></CirclePlay>
            <Star className="star"></Star>
            <Heart className="heart"></Heart>
        </div>
      </div>);
}

export default FavPart;
