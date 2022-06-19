import React from "react";

function DetailPageInfo({ movieDetail }) {
    return (
        <div className="movieDetailInfo">
            <h1 className="movieTitle">{movieDetail?.title}</h1>
            <p><span>Release Date:</span>{movieDetail?.release_date}</p>
            <p className="movieOverview">{movieDetail?.overview}</p>
            <p><span>Genres:</span> {movieDetail?.genres?.map(genre => (<span>{genre}</span>))}</p>
        </div>);
}

export default DetailPageInfo;
