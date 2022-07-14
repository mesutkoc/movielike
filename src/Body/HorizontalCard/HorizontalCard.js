import React from "react";
import HorizontalCardImage from "../HorizontalCardComponents/HorizontalCardImage";
import CardOverview from "../HorizontalCardComponents/CardOverview";
import TrailerButton from "../HorizontalCardComponents/TrailerButton";
import HorizontalCardFavPart from "../HorizontalCardComponents/HorizontalCardFavPart";
import Genres from "../HorizontalCardComponents/Genres";
import "./HorizontalCard.scss";

function HorizontalCard({movieData}) {
  return <div className="horizontalCard">
      <HorizontalCardImage image={movieData?.poster}></HorizontalCardImage>
      <div className="horizontalCardRightSide">
           <CardOverview overview={movieData?.overview}></CardOverview>
           <TrailerButton id={movieData?.id}></TrailerButton>
           <HorizontalCardFavPart id={movieData?.id}></HorizontalCardFavPart>
           <Genres genres={movieData?.genres}></Genres>
      </div>
     
      
  </div>;
}

export default HorizontalCard;
