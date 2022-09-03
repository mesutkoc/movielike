import React, { useMemo } from "react";
import "./HorizontalCardFavPart.scss"
import { ReactComponent as CirclePlay } from "../../Icons/circle-play.svg"
import { ReactComponent as Star } from "../../Icons/star-solid.svg"
import { ReactComponent as Heart } from "../../Icons/heart-solid.svg"
import { ReactComponent as Eye } from "../../Icons/eye-solid.svg"
import randomPoint from "../../helpers";
import { Routes_Const } from "../../constants";
import { Link } from "react-router-dom";
import { useBasket } from "../../Context/BasketContext";

function HorizontalCardFavPart({ movieData }) {
  const { basket, setBasket } = useBasket();

  const point = useMemo(() => randomPoint(), []);

  const addBasket = (item) => {
    const datas = basket?.find(movie => movie.id === item.id);
    (item.id !== datas?.id || basket.length === 0) && setBasket([...basket, item])
  }

  return (<div className="favItemss">

    <div className="userActions">
      <Link to={`/${Routes_Const.WATCH}/${movieData?.id}`}><CirclePlay className="playIcon"></CirclePlay></Link>
      <Star className="star"></Star>
      <Heart className="heart" onClick={() => addBasket(movieData)}></Heart>
    </div>
    <div className="viewCounts">
      <Eye className="eye"></Eye>
      <label className="count">{point}</label>
    </div>
  </div>);
}

export default HorizontalCardFavPart;
