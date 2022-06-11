import React from "react";
import HorizontalCardImage from "../HorizontalCardComponents/HorizontalCardImage";
import HorizontalCardTitle from "../HorizontalCardComponents/HorizontalCardTitle";
import CardOverview from "../HorizontalCardComponents/CardOverview";
import TrailerButton from "../HorizontalCardComponents/TrailerButton";
import HorizontalCardFavPart from "../HorizontalCardComponents/HorizontalCardFavPart";
import Genres from "../HorizontalCardComponents/Genres";
import "./HorizontalCard.scss";

function HorizontalCard({movieData}) {
  return <div className="horizontalCard">
      <HorizontalCardImage image={movieData?.poster}></HorizontalCardImage>
      <div className="horizontalCardRightSide">
           <HorizontalCardTitle title={movieData?.title}></HorizontalCardTitle>
           <CardOverview overview={movieData?.overview}></CardOverview>
           <TrailerButton></TrailerButton>
           <HorizontalCardFavPart></HorizontalCardFavPart>
           <Genres genres={movieData?.genres}></Genres>
      </div>
     
      
  </div>;
}

export default HorizontalCard;
