import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../Requests/MovieRequest";
import DetailImage from "./DetailPageComponents/DetailImage";
import DetailPageInfo from "./DetailPageComponents/DetailPageInfo";
import "./Detail.scss";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByID(id).then(res => setMovie(res));
  }, [id])
  console.log('deneme');
  return (
    <div className="detailPageRoot">
      <DetailImage image={movie?.poster}></DetailImage>
      <DetailPageInfo movieDetail={movie}></DetailPageInfo>
    </div>);
}

export default Detail;
