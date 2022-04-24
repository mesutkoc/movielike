import React from "react";
import "./Genres.scss"

function Genres({genres}) {
  return (<div className="genresTable">
      
      {genres?.slice(0,3).map((genre,index)=><div key={index} className="genreType">{genre}</div>)}
      
      </div>);
}

export default Genres;
