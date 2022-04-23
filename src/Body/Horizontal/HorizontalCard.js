import React from "react";
import "./HorizontalCard.scss"
import { useMovie } from "../../Context/MovieContext"
import CardImage from "../CardComponents/CardImage";
import CardHeader from "../CardComponents/CardHeader";
import CardOverview from "../CardComponents/CardOverview";
import TrailerButton from "../CardComponents/TrailerButton";

function HorizontalCard() {
  const { movie } = useMovie();

  const movieData = movie.find(item => item.id === '166428')

  return <div className="horizontalCard">
      <CardImage image={movieData?.poster}></CardImage>
      <CardHeader title={movieData?.title}></CardHeader>
      <CardOverview overview={movieData?.overview}></CardOverview>
      <div className="trailerInfo">
        <TrailerButton></TrailerButton>
      </div>
  </div>;
}

export default HorizontalCard;