import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../Requests/MovieRequest";
import RecommendedPart from "./RecommendedPart";
import Screen from "./Screen";

function WatchMovie() {
    const [movie, setMovie] = useState({});
    const movieItem = useParams();
    
    useEffect(() => {
        getMovieByID(movieItem.id).then(res => setMovie(res));
    }, [movieItem.id])


    return <div className="watchPart"> 
        <Screen></Screen>
        <RecommendedPart></RecommendedPart>
    </div>;
}

export default WatchMovie;
