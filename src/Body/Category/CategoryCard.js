import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ genreItem }) {
    return  <Link to={`category/${genreItem?.genre}`}><div className="catCard">
                <div className="catCardImages"><img className="catImageSizes" src={genreItem?.poster} alt="error"></img></div>
                    <p>{genreItem?.genre}</p>
                </div>
            </Link>
}

export default CategoryCard;
