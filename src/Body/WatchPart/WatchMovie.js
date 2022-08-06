import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../Requests/MovieRequest";

function WatchMovie() {
    const [movie, setMovie] = useState({});
    const movieItem = useParams();
    
    useEffect(() => {
        getMovieByID(movieItem.id).then(res => setMovie(res));
    }, [movieItem.id])


    return <div>{movie?.title}</div>;
}

export default WatchMovie;
