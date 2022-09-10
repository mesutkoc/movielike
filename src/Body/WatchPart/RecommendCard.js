import React from "react";

function RecommendCard({ movie }) {
    return <div className="recommendCard">
        <div className="recoCardImg"><img className="image" src={movie?.poster} alt={`recoCardImg-${movie?.title}`}></img></div>
        <div className="description">{movie.title}</div>
    </div>;
}

export default RecommendCard;
