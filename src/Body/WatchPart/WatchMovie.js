import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../Requests/MovieRequest";
import RecommendedPart from "./RecommendedPart";
import Screen from "./Screen";

function WatchMovie({ movies }) {
    const [movie, setMovie] = useState({});
    const [fullscreen, setScreen] = useState(true);

    const movieItem = useParams();

    useEffect(() => {
        getMovieByID(movieItem.id).then(res => setMovie(res));
    }, [movieItem.id])

    const recoMovie = useMemo(() => (
        movies?.filter(item => item?.genres?.find(genre => movie?.genres?.[0] === genre && movie?.title !== item?.title))?.slice(0,15)
    ), [movies, movie])

    return <div className="watchPart">
        <Screen movie={movie} setScreen={setScreen} fullscreen={fullscreen}></Screen>
        <RecommendedPart fullscreen={fullscreen} recoMovie={recoMovie}></RecommendedPart>
    </div>;
}

export default WatchMovie;
