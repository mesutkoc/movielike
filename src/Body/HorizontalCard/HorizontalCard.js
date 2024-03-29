import React from "react";
import HorizontalCardImage from "../HorizontalCardComponents/HorizontalCardImage";
import CardOverview from "../HorizontalCardComponents/CardOverview";
import TrailerButton from "../HorizontalCardComponents/TrailerButton";
import HorizontalCardFavPart from "../HorizontalCardComponents/HorizontalCardFavPart";
import Genres from "../HorizontalCardComponents/Genres";
import "./HorizontalCard.scss";

function HorizontalCard({movieData}) {
  return <li className="horizontalCard">
      <HorizontalCardImage image={movieData?.poster}></HorizontalCardImage>
      <div className="horizontalCardRightSide">
           <CardOverview overview={movieData?.overview}></CardOverview>
           <TrailerButton id={movieData?.id}></TrailerButton>
           <HorizontalCardFavPart movieData={movieData}></HorizontalCardFavPart>
           <Genres genres={movieData?.genres}></Genres>
      </div>
  </li>;
}

export default HorizontalCard;
