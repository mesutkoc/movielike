import React from "react";
import "./CategoryCard.scss";

function CategoryCard({ genreItem }) {
    return <div className="catCard">
        <div className="catCardImages"><img className="catImageSizes" src={genreItem?.poster} alt="error"></img></div>
        <p>{genreItem?.genre}</p>
    </div>
}

export default CategoryCard;
