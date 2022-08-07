import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByCat } from "../../Requests/MovieRequest";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import Pagination from "../Pagination/Pagination";
import SearchResult from "../SearchResult/SearchResult";
import "./CategoryPage.scss"

function CategoryPage() {
    const { genre } = useParams();
    const [catMovies, setCatMovies] = useState([])
    useEffect(() => {
        getMoviesByCat(genre).then(res => setCatMovies(res));
    }, [genre])

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 16;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = catMovies?.slice(indexOfFirstMovie, indexOfLastMovie);
    const pagenumber = [];

    for (let i = 1; i < Math.ceil(catMovies.slice(0, 150).length / moviesPerPage); i++) {
        pagenumber.push(i);
    }

    return <div className="categoryPage">
        {catMovies.length !== 0 && <SearchResult searchResult={catMovies.length} genre={genre}></SearchResult>}
        <div className="categoryMovies">
            {currentMovie?.map((movieData, index) =>
             <HorizontalCard movieData={movieData} key={index}></HorizontalCard>)}
            {pagenumber.length > 1 && <Pagination genre={genre} pagenumber={pagenumber} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>}
        </div>
        
    </div>;
}

export default CategoryPage;
 