import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatMovies } from "../../Requests/MovieRequest";
import { scrollPage, splitGenrePath } from "../../helpers";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import Pagination from "../Pagination/Pagination";
import "./CategoryPage.scss"

function CategoryPage({ setGenrePath }) {
    const { genre } = useParams();
    const [catMovies, setCatMovies] = useState([])

    useEffect(() => {
        const datas = splitGenrePath(genre);
        getCatMovies(genre).then(res => setCatMovies(res));
        setGenrePath(datas)
    }, [genre, setGenrePath])

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
        {pagenumber.length > 1 && <Pagination pagenumber={pagenumber} handleClick={handleClick} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>}
    </div>;
}

export default CategoryPage;
