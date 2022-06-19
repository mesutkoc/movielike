import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../Requests/MovieRequest";

function Detail() {
  const movieItem = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(movieItem.id).then(res => setMovie(res));
  }, [movieItem.id])
 
  return <div>
    <ul>
      <li>{movie?.id}</li>
      <li>{movie?.title}</li>
      <li>{movie?.overview}</li>
      <li><img src={movie?.poster} alt="movieImage"/></li>
      <li>{movie?.genres?.map(item=> <li>{item}</li>)}</li>
      <li>{movie?.release_date}</li>
    </ul>
  </div>;
}

export default Detail;
