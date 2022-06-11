import React, { memo, useState } from "react";
import "./Body.scss"
import HorizontalCard from "./HorizontalCard/HorizontalCard";
import VerticalCard from "./VerticalCard/VerticalCard";

function Body({ movie }) {
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 16;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = movie?.slice(indexOfFirstMovie, indexOfLastMovie);
    const pagenumber = [];
    for(let i = 1; i < Math.ceil(movie.slice(0,50).length / moviesPerPage); i++){
        pagenumber.push(i);
    }
    const handleClick = (item)=> {
       
        setCurrentPage(Number(item))
        
      }
    return (<div className="body">
        {currentMovie?.map((movieData, index) =>
            <HorizontalCard movieData={movieData} key={index}></HorizontalCard>
        )}  
        {/* {movie.slice(0, 8).map((movieData, index) =>
            <VerticalCard movieData={movieData} key={index}></VerticalCard>
        )} */}
        <ul>
            {pagenumber.map((item,index) => <li key={index} onClick={()=>handleClick(item)}>{item}</li>)}
        </ul>
    </div>);
}

export default memo(Body);
