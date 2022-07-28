import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatMovies } from "../../Requests/MovieRequest";
import { scrollPage } from "../../helpers";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import Pagination from "../Pagination/Pagination";
import "./CategoryPage.scss"

function CategoryPage() {
    const { genre } = useParams();
    const [catMovies, setCatMovies] = useState([])
    
    useEffect(() => {
        getCatMovies(genre).then(res => setCatMovies(res));
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

    const handleClick = (item) => {
        setCurrentPage(Number(item));
        scrollPage();
    }

    return <div className="categoryPage">
        {currentMovie?.map((movieData, index) =>
            <HorizontalCard movieData={movieData} key={index}></HorizontalCard>)}
        {pagenumber.length > 1 && <Pagination genre={genre} pagenumber={pagenumber} handleClick={handleClick} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>}
    </div>;
}

export default CategoryPage;
