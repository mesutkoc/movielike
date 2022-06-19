import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../Requests/MovieRequest";
import DetailImage from "./DetailPageComponents/DetailImage";
import DetailPageInfo from "./DetailPageComponents/DetailPageInfo";
import "./Detail.scss";

function Detail() {
  const movieItem = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(movieItem.id).then(res => setMovie(res));
  }, [movieItem.id])

  return (
    <div className="detailPageRoot">
      <DetailImage image={movie?.poster}></DetailImage>
      <DetailPageInfo movieDetail={movie}></DetailPageInfo>
    </div>);
}

export default Detail;
