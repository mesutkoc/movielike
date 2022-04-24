import React from "react";
import "./HorizontalCard.scss"
import CardImage from "../CardComponents/CardImage";
import CardHeader from "../CardComponents/CardHeader";
import CardOverview from "../CardComponents/CardOverview";
import TrailerButton from "../CardComponents/TrailerButton";
import FavPart from "../CardComponents/FavPart";
import Genres from "../CardComponents/Genres";

function HorizontalCard({movieData,index}) {
  
  return <div className="horizontalCard" key={index}>
      <div className="imageDiv">
        <CardImage image={movieData?.poster}></CardImage>
      </div>
      <div className="titleDiv">
        <CardHeader title={movieData?.title}></CardHeader>
      </div>
      <div className="overviewDiv">
        <CardOverview overview={movieData?.overview}></CardOverview>
      </div>
      <div className="trailerInfo">
        <TrailerButton></TrailerButton>
      </div>
      <div className="favPart">
        <FavPart></FavPart>
      </div>
      <div className="genresPart">
        <Genres genres={movieData?.genres}></Genres>
      </div>
  </div>;
}

export default HorizontalCard;