import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../Requests/MovieRequest";

function Detail() {
  const movieItem = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(movieItem.id).then(res => setMovie(res));
  }, [movieItem.id])
  // const fetchItem = async () => {
  //   const fetchItem = await fetch(`http://localhost:3000/movies/${movieItem.id}`);
  //   const item = await fetchItem.json();
  //   console.log(item);
  // }

  console.log(movie);
  return <div>
    <ul>
      <li>{movie?.id}</li>
      <li>{movie?.title}</li>
      <li>{movie?.overview}</li>
      <li><img src={movie?.poster}/></li>
      <li>{movie?.genres?.map(item=> <li>{item}</li>)}</li>
      <li>{movie?.release_date}</li>
    </ul>
  </div>;
}

export default Detail;
