import React from "react";
import "./GenresFilters.scss"

function GenresFilters({genre}) {
  
  return <div className="genresFilter">
        <ul className="genresList">
            {genre?.map(item=> (<li className="genresItem" key={item.id}>{item.genre}</li>))}
        </ul>
    </div>;
}

export default GenresFilters;
