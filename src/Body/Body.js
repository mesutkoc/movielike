import React, { memo, useState } from "react";
import { scrollPage } from "../helpers";
import "./Body.scss"
import HorizontalCard from "./HorizontalCard/HorizontalCard";
import Pagination from "./Pagination/Pagination";

function Body({ movies }) {
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 16;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

    const pagenumber = [];
    for(let i = 1; i < Math.ceil(movies.slice(0,150).length / moviesPerPage); i++){
        pagenumber.push(i);
    }

    const handleClick = (item)=> {
        setCurrentPage(Number(item));
        scrollPage();
    }
    return (<div className="body">
        {currentMovie?.map((movieData, index) =>
            <HorizontalCard movieData={movieData} key={index}></HorizontalCard>
        )}  
        {/* {movie.slice(0, 8).map((movieData, index) =>
            <VerticalCard movieData={movieData} key={index}></VerticalCard>
        )} */}
        <Pagination pagenumber={pagenumber} handleClick={handleClick} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
    </div>);
}

export default memo(Body);
